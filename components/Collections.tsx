import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col w-full items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Coleções</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">Nenhuma coleção encontrada</p>
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4 lg:w-full lg:max-w-4xl"
        >
          <CarouselContent className="flex">
            {collections.map((collection: CollectionType) => (
              <CarouselItem
                key={collection._id}
                className="md:basis-1/2 lg:basis-1/5"
              >
                <div className="p-2">
                  <Card className="rounded-lg overflow-hidden border-none bg-zinc-900">
                    <Link href={`/collections/${collection._id}`}>
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        width={250}
                        height={200}
                        className="w-full h-56 lg:h-36 rounded-t-lg"
                      />
                      <CardContent className="p-4 bg-zinc-700 text-zinc-50">
                        <p className="text-base-medium text-center">
                          {collection.title}
                        </p>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
      )}
    </div>
  );
};

export default Collections;

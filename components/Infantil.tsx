import { getCollections, getProducts } from "@/lib/actions/actions";
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
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const Infantil = async ({ updateSignedInUser }: ProductCardProps) => {
  const products = await getProducts();
  const produtosInfantil = products.filter((product: ProductType) =>
    product.tags.some((tag) => tag.toLowerCase() === "infantil")
  );

  return (
    <div className="flex flex-col w-full items-center gap-10 py-8 px-5 max-w-7xl mx-auto">
      <h1 className="text-heading2-bold lg:text-heading1-bold">Infantil</h1>
      {!produtosInfantil || produtosInfantil.length === 0 ? (
        <p className="text-body-bold">Nenhum produto infantil encontrado.</p>
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4 lg:w-full lg:max-w-[1280px]"
        >
          <CarouselContent className="flex">
            {produtosInfantil.map((product: ProductType) => (
              <CarouselItem
                key={product._id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-2">
                  <Card className="border-none bg-transparent">
                    <Link href={`/products/${product._id}`}>
                      <Image
                        src={product.media[0]}
                        alt={product.title}
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg h-80"
                      />
                      <CardContent className="p-4 text-zinc-50">
                        <div>
                          <p className="text-base-bold">{product.title}</p>
                          <p className="text-small-medium text-grey-2">
                            {product.category}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-body-bold">
                            {product.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </p>
                          <HeartFavorite
                            product={product}
                            updateSignedInUser={updateSignedInUser}
                          />
                        </div>
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

export default Infantil;

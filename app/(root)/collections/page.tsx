import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

type CollectionType = {
  _id: string;
  title: string;
  products: number;
  image: string;
};

const CollectionPage = async () => {
  const products = await getCollections();

  const collections: CollectionType[] = products
    .map((product: { collections: CollectionType[] }) => product)
    .flat()
    .filter((collection: CollectionType) => collection && collection._id); // Ensure valid collection

  return (
    <section className="px-10 py-5 pt-28 lg:pt-40 space-y-6">
      <h1 className="text-heading3-bold lg:text-heading2-bold">Coleções</h1>
      <div className="grid lg:grid-cols-5 gap-4 w-full max-w-[1200px] mx-auto">
        {collections.map((collection) => (
          <div key={collection._id} className="rounded-md bg-zinc-900">
            <Link
              href={`/collections/${collection._id}`}
              className="rounded-md"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                width={250}
                height={200}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4 bg-zinc-700 text-zinc-50 rounded-b-md">
                <p className="text-base-medium text-center">
                  {collection.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionPage;

import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const News = async () => {
  const products = await getProducts();
  const productsNews = products.filter((product: ProductType) =>
    product.tags.some((tag) => tag.toLowerCase() === "destaque")
  );

  // Caso haja menos de 6 produtos com a tag "destaque", adiciona os mais recentes
  if (productsNews.length < 6) {
    const additionalProducts = products
      .filter(
        (product: ProductType) => !productsNews.includes(product)
      )
      .sort(
        (
          a: { createdAt: string | number | Date },
          b: { createdAt: string | number | Date }
        ) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ) 
      .slice(0, 6 - productsNews.length);

    productsNews.push(...additionalProducts);
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading2-bold lg:text-heading1-bold">
        Destaques da Semana
      </p>
      {!productsNews || productsNews.length === 0 ? (
        <p className="text-body-bold">Nenhum produto encontrado</p>
      ) : (
        <div className="flex lg:flex-wrap w-full overflow-x-auto [&::-webkit-scrollbar]:hidden lg:justify-center gap-8 lg:gap-16">
          {productsNews.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;

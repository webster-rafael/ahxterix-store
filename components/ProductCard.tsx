"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={810}
        height={1000}
        className="h-[250px] w-full rounded-lg"
      />
      <div className="w-[220px] flex flex-col">
        <p className="text-base-bold truncate">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="w-full flex justify-between items-center">
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
    </Link>
  );
};

export default ProductCard;

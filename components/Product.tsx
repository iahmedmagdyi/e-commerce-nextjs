"use client";
import Link from "next/link";
import React from "react";
import ProductImage from "./Productimae";
interface productProps {
    product: Product;
}

const Product = ({ product }: productProps) => {
    return (
        <Link
            prefetch={false}
            href={`/product/${product.id}`}
            className="flex 
                       flex-col h-96
                        border rounded
                       p-5 
                         group hover:scale-105 transition-transform duration-200 ease-out"
        >
            <div className=" relative max-h-72 flex-1 ">
                <ProductImage fill product={product} />
            </div>
            <div className="flex justify-between items-center font-semibold mt-4 mb-1 ">
                <p className="w-44 truncate">{product.title}</p>
                <p>{product.price}</p>
            </div>
            <p className=" line-clamp-2 italic w-64 text-xs text-gray-600">
                {product.description}
            </p>
        </Link>
    );
};

export default Product;

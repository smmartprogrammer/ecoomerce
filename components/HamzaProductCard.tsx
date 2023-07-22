"use client"
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { FC } from "react"
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";


export const HamzaProductCard: FC<{ item: any }> = ({ item }) => {
    const handleAddToCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                product_id: item._id
            })
        })
        const result = await res.json()
        console.log(result);

    }

    return (
        <div>
            <Image src={urlForImage(item.image).url()} width={250} height={200} alt="productimage" className="max-h-[200px] object-cover object-top" />
            <h3 className="font-bold text-lg mt-3 text-[#212121] py-1 ">{item.title} </h3>
            <p className="font-bold text-base text-[#888888] py-1 ">{item.category} </p>
            <p className="font-bold text-xl  py-1 text-[#212121] "> ${item.price} </p>
            <Button
                onClick={()=>    handleAddToCart()}
                className="bg-black text-white font-bold px-6"
            >
                <ShoppingCart className="mr-2 h-4 w-4 text-xl font-bold " /> Add to Cart
            </Button>
        </div>
    )
}

import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { ProductItem } from "../../app/types";

export const ProductCard = ({id, title, subtitle, image, price}: ProductItem) => {
  return (
    <Card className="w-full h-[520px] r-std flex flex-col justify-between product-card save bg-background" key={id}>
        <CardHeader className="z-10 save text-primary-100 text-medium font-medium flex justify-between items-center p-[20px]">
            <p className="lowercase">{title}</p>
            <p>{price} руб</p>
        </CardHeader>
        <Image 
            removeWrapper
            className="w-full h-full absolute top-0 left-0 z-0 rounded-tiny"
            src={image}
            alt={title}
        />
        <CardFooter className="z-10 save text-primary-100 p-[20px]">
            <p className="lowercase text-small product-subtitle line-small-md">{subtitle}</p>
        </CardFooter>
        <div className="product-mask absolute w-full h-full z-5"></div>
    </Card>
  )
}

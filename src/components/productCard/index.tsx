import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { ProductItem } from "../../app/types";
import './index.css';
import { ProductParametrBlock } from "./productParametr";

export const ProductCard = ({id, title, ram, image, type, processor, year, price}: ProductItem) => {
  const productParams = [
    { name: "Тип", value: type },
    { name: "Модель", value: title },
    { name: "Год релиза", value: year },
    { name: "Процессор", value: processor },
    { name: "Оперативная память", value: `${ram}Гб` },
  ];
  return (
    <Card className="w-full h-[420px] rounded-tiny flex flex-col justify-between product-card save bg-background cursor-pointer" key={id}>
        <CardHeader className="z-10 save text-primary-100 text-small font-medium flex justify-between items-center p-[20px]">
            <p className="lowercase">{title}</p>
            <p>{price} руб</p>
        </CardHeader>
        <Image 
            removeWrapper
            className="w-full h-full absolute top-0 left-0 z-110 rounded-tiny"
            src={image}
            alt={title}
        />
        <div className="product-char z-10 save text-primary-100 p-[20px]">
          {productParams.map((params, index) => (
            <ProductParametrBlock key={index} name={params.name} value={params.value} />
          ))}
        </div>
        <div className="product-mask absolute w-full h-full z-5"></div>
    </Card>
  )
}

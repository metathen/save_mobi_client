import { Card, CardHeader, Image } from "@nextui-org/react"
import { FaTelegram } from "react-icons/fa";
import { Social } from "../social";

type Props = {
  text: string;
  image: string;
  logo: string;
}

export const Banner = ({text, image, logo}: Props) => {
  return (
    <Card className="h-[100vh] flex flex-col justify-center" radius="none">
      <Image 
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover absolute top-0 left-0 pointer-none"
        src={image}
        radius='none'
        loading="lazy"
      />
      <div className="flex justify-between items-center overflow-hidden py-1 z-10 box box-center">
        <p className="z-2 text-white text-large line-large uppercase font-semibold box-banner">
          {text}
        </p>
        <Social 
          link="https://telegram.com"
          content="Переход в телеграм" 
          linkColor="bg-white"
          Icon={FaTelegram} 
          iconColor="36ACDE" 
        />
      </div>
    </Card>
  )
}

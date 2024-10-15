import { Card, CardHeader, Image } from "@nextui-org/react"
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { Social } from "../social";
import './index.css';

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
        <p className="z-2 text-white uppercase font-semibold box-banner banner-text">
          {text}
        </p>
        <Social 
          link="https://telegram.com"
          content="Переход в телеграм" 
          bgColor="bg-tg"
          width="50px"
          height="50px"
          Icon={FaTelegramPlane} 
          iconColor="#FFFFFF" 
        />
      </div>
    </Card>
  )
}

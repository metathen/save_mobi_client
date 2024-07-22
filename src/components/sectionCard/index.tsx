import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { ServiceItem } from '../../app/types';

export const SectionCard = ({id, title, subtitle, image, price}: ServiceItem) => {
  return (
    <Card 
      className='w-full h-[416px] c-el-white c-bg-dark-md service-card white p-[20px] flex flex-col justify-between' 
      key={id}
    >
      <CardHeader className='flex-col items-start gap-[5px]'>
        <p className='fs-sd font-semibold lowercase'>{title}</p>
        <p 
          className='fs-md service-subtitle pointer-none' 
          style={{lineHeight: '152%;', maxWidth: '70%'}}
        >
          {subtitle}
        </p>
      </CardHeader>
      <Image 
        removeWrapper
        className={`absolute right-0 bottom-0 z-0 w-[326px] h-[326px]`}
        src={`${image}`}
      />
      <CardFooter>
        <p className="fs-sd font-semibold">{price}</p>
      </CardFooter>
    </Card>
  )
}

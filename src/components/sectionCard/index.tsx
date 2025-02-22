import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { ServiceItem } from '../../app/types';
import styled from './index.module.css';

export const SectionCard = ({id, title, subtitle, image, price}: ServiceItem) => {
  return (
    <Card 
      className={`w-full h-[416px] save text-primary-100 bg-background-dark-md service-card white p-[20px] flex flex-col justify-between ${styled['service-box']}`}
      key={id}
    >
      <CardHeader className='flex-col items-start gap-[5px]'>
        <p className='text-medium font-medium font-semibold lowercase'>{title}</p>
        <p 
          className='text-small service-subtitle pointer-none' 
          style={{lineHeight: '152%;', maxWidth: '70%'}}
        >
          {subtitle}
        </p>
      </CardHeader>
      <Image 
        removeWrapper
        className={`absolute right-0 bottom-0 z-0 transition-1 ${styled['service-img']}`}
        src={`${image}`}
      />
      <CardFooter>
        <p className="text-medium font-medium font-semibold">{price}</p>
      </CardFooter>
    </Card>
  )
}

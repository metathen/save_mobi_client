import { Link } from '@nextui-org/react';
import React from 'react';
import { Social } from '../social';
import { FaInstagram, FaInstagramSquare, FaTelegram, FaTelegramPlane } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

type Props = {
  tel: string;
  mail: string;
  address: string;
  telegram?: string;
  inst?: string;
}

export const FooterContact = (
  {tel, mail, address, telegram, inst} : Props
) => {
  return (
    <div className="flex items-center justify-between py-[42px]">
      <div className="flex gap-10 text-small">
        <p className='font-semibold'>контакты</p>
        <div>
          <Link className='text-small text-primary-50' href={`tel:${tel}`}>{tel}</Link>
          <br />
          <Link className='text-small text-primary-50' href={`mailto:${mail}`}>{mail}</Link>
        </div>
      </div>
      <div className="flex gap-2">
        <Social content='Перейти в телеграм' link={`${telegram}`} Icon={FaTelegramPlane} iconColor='white'
          width='60px'
          height='60px' 
        />
        <Social content='Перейти в инстаграм' 
          link={`${inst}`} 
          Icon={FaInstagram} 
          iconColor='white'
          width='60px'
          height='60px'
        />
      </div>
      <div className="flex text-small gap-10 adress">
        <p>{address}</p>
      </div>
    </div>
  )
}
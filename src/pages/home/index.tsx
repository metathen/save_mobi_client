import React from 'react';
import { Banner } from '../../components/Banner';
import { Service } from '../../components/service';
import { Products } from '../../components/products';

export const Home = () => {
  return (
    <>
      <Banner 
        text='ВОСКРЕШЕНИЕ СМАРТФОНОВ: ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И СЕРВИС, КОТОРЫЙ ДАРИТ ВТОРУЮ ЖИЗНЬ ВАШЕМУ ГАДЖЕТУ' 
        logo='' 
        image='../../../image-times/Rectangle 167 (2).png' 
      />
      <Service />
      <Products />
    </>
  )
}

import React from 'react'
import { Banner } from '../../components/Banner'
import { Header } from '../../components/header'

export const Home = () => {
  const menuArr = [
    {
      id: '12',
      path: '#service',
      name: 'услуги'
    },
    {
      id: '123',
      path: '#form',
      name: 'оставить заявку'
    }
  ]
  return (
    <>
      <Header list={menuArr} />
      <Banner 
        text='ВОСКРЕШЕНИЕ СМАРТФОНОВ: ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И СЕРВИС, КОТОРЫЙ ДАРИТ ВТОРУЮ ЖИЗНЬ ВАШЕМУ ГАДЖЕТУ' 
        logo='' 
        image='../../../image-times/Rectangle 167 (2).png' 
      />
    </>
  )
}

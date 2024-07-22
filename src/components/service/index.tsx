import { Card } from '@nextui-org/react'
import React from 'react'
import { SectionTitle } from '../sectionTitle'
import { SectionCard } from '../sectionCard'

export const Service = () => {
    const arrItems = [
        {
            id: '1',
            title: 'замена экрана',
            image: '../../../image-times/в5 1.png',
            price: 'от 1900руб',
            subtitle: 'полная замена экрана и всех составляющих дисплея'
        },
        {
            id: '2',
            title: 'замена экрана',
            image: '../../../image-times/в5 1.png',
            price: 'от 1900руб',
            subtitle: 'полная замена экрана и всех составляющих дисплея'
        },
        {
            id: '3',
            title: 'замена экрана',
            image: '../../../image-times/в5 1.png',
            price: 'от 1900руб',
            subtitle: 'полная замена экрана и всех составляющих дисплея'
        }
    ];
    return (
        <section className='service' id='service' style={{color: 'white'}}>
            <div className="service-box box">
                <SectionTitle text='Услуги' />
                <div className="service-items w-full pt-[40px]">
                    {
                        arrItems.length > 0 ? arrItems.map((i) => (
                            <SectionCard 
                                id={i.id}
                                title={i.title}
                                image={i.image}
                                price={i.price}
                                subtitle={i.subtitle}
                            /> 
                        ))
                        : null
                    }
                </div>
            </div>
        </section>
    )
}

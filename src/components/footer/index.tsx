import React from 'react'
import { Form as FormFoot } from '../form'
import { SectionTitle } from '../sectionTitle'
import { FooterContact } from '../footerContact'

export const Footer = () => {
    const footArr = [
        {
            id: '1',
            name: 'Huawei'
        },
        {
            id: '2',
            name: "Xiaomi"
        },
        {
            id: "#",
            name: "Apple"
        }
    ]
    return (
        <footer className="footer" style={{color: 'white'}}>
            <div className="footer-box box">
                <SectionTitle text='Обсудить детали' />
                <FormFoot list={footArr} />
                <FooterContact 
                    tel='+79537845840' 
                    mail='orunbaevr848@gmail.com' 
                    telegram='' 
                    inst='' 
                    address='12313, г. новосибирск, м. золотая нива'
                />
            </div>
        </footer>
    )
}

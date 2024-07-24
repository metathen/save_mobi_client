import React from 'react'
import { Form as FormFoot } from '../form'
import { SectionTitle } from '../sectionTitle'

export const Footer = () => {
    const footArr = [
        {
            id: '1',
            name: 'login'
        }
    ]
    return (
        <footer className="footer" style={{color: 'white'}}>
            <div className="footer-box box">
                <SectionTitle text='Обсудить детали' />
                <FormFoot list={footArr} />
            </div>
        </footer>
    )
}

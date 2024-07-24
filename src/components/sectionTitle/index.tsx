import React from 'react'

type Props = {
    text: string;
    classDef?: string;
}

export const SectionTitle = ({text, classDef} : Props) => {
    return (
        <div className='font-semibold text-medium font-medium uppercase'>{text}</div>
    )
}

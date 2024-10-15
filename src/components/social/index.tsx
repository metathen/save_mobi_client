import { Link, Tooltip } from '@nextui-org/react';
import { IconType } from 'react-icons';

type Props = {
    content: string;
    bgColor?: string;
    Icon: IconType;
    iconColor: string;
    width?: string;
    height?: string;
    link: string;
}

export const Social = ({content, Icon, bgColor, width, height, iconColor, link}: Props) => {
    return (
        <Tooltip content={content} className='text-tiny font-semibold py-[5px]'>
            <Link 
                href={link}
                target='_blank'
                className={`r-circle ${bgColor} flex items-center justify-center`}
                style={{width, height}}
            >
                <Icon color={iconColor} className={`w-[60%]`} />
            </Link>
        </Tooltip>
    )
}

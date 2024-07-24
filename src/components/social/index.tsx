import { Link, Tooltip } from '@nextui-org/react';
import { IconType } from 'react-icons';

type Props = {
    content: string;
    linkColor?: string;
    Icon: IconType;
    iconColor: string;
    link: string;
}

export const Social = ({content, linkColor, Icon, iconColor, link}: Props) => {
    return (
        <Tooltip showArrow={true} content={content} className='text-tiny font-semibold py-[5px]'>
            <Link 
                href={link}
                target='_blank'
                className={`r-circle ${linkColor} w-[46px] h-[46px] flex items-center justify-center`}
            >
                <Icon color={iconColor} className="w-[120%] h-[120%]" />
            </Link>
        </Tooltip>
    )
}

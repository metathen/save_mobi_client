import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Menu } from '../../app/types';
import { Link } from 'react-router-dom';

type Props = {
    list: Menu[];
}

export const Header = ({list}: Props) => {
    return (
        <header className="header absolute top-0 py-4 z-100 w-full">
            <div className="header-box box flex justify-end">
                <Dropdown 
                    backdrop='blur' 
                    className='text-small dark bg-background border-background' 
                    placement='bottom-end'
                    type='menu'
                    shouldBlockScroll={true}
                    style={{width: '500px', border: '0', borderColor: 'transparent'}}
                >
                    <DropdownTrigger>
                        <Button className='text-small white px-[20px] pb-[9px] pt-[4px] r-md bg-background-dark save text-primary-100'>
                            меню
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                        className='box px-2 py-6 flex flex-col gap-10 dark bg-background'
                    >
                        {list.map(i => (
                            <DropdownItem key={i.id} className="h-[60px]">
                                <Link 
                                    to={i.path} 
                                    className='font-semibold text-small px-2 save flex text-primary-100 w-full h-full'
                                >
                                    {i.name}
                                </Link>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    )
}

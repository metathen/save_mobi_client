import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react';
import { Menu } from '../../app/types';

type Props = {
    list: Menu[];
}

export const Header = ({list}: Props) => {
    return (
        <header className="header absolute top-0 py-4 z-100 w-full">
            <div className="header-box box flex justify-end">
                <Dropdown 
                    backdrop='blur' 
                    className='fs-md' 
                    style={{width: '500px', border: '0', borderColor: 'transparent'}}
                >
                    <DropdownTrigger>
                        <Button className='fs-md white px-[20px] pb-[9px] pt-[4px] r-md c-bg-dark c-el-white'>
                            меню
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu className='box p-2'>
                        {list.map(i => (
                            <DropdownItem key={i.id}>
                                <Link 
                                    href={i.path} 
                                    className='font-semibold fs-md py-2 px-2' 
                                    style={{color: "black"}}
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

import { Autocomplete, AutocompleteItem, Input, Textarea } from '@nextui-org/react';
import { CompleteItem } from '../../app/types';
import { useState } from 'react';

type Props = {
  list: CompleteItem[];
}

export const Form = ({list}: Props) => {
  const [touched, setTouched] = useState(false);
  return (
    <form id='form' className='form'>
      <div className="flex gap-[139px]">
        <div className='w-[42%]'>
          <Input 
            type='text'
            label="Имя"
            variant='underlined'
            className="dark flex text-primary-100 w-full text-tiny pb-[45px]"
            labelPlacement='outside'
            isRequired={true}
            size='md'
          />
          <Input 
            type='email'
            label="Email"
            variant='underlined'
            className="save flex text-primary-100 w-full pb-[45px]"
            labelPlacement='outside'
            isRequired={true}
            size='md'
          />
          <Input 
            type='tel'
            label="Телефон"
            variant='underlined'
            className="save flex text-primary-100 w-full"
            labelPlacement='outside'
            isRequired={true}
            size='md'
          />
        </div>
        <div className="w-[42%] flex flex-col justify-between">
          <Autocomplete
            label="Марка устройства"
            labelPlacement='outside'
            defaultItems={list}
            variant='underlined'
            errorMessage={touched ? 'Выберите вариант из списка' : ''}
            className='save text-primary-100 border-background'
          >
            {item => <AutocompleteItem key={item.id} className='save bg-background border-background text-primary-100'>{item.name}</AutocompleteItem>}
          </Autocomplete>
          <Textarea
            label="Описание проблемы" 
            labelPlacement='outside'
            rows={60}
            variant='underlined'
            className="save flex text-primary-100 w-full"
          />
        </div>
      </div>
    </form>
  )
}

import { Autocomplete, AutocompleteItem, Input, Textarea, Button, Link } from '@nextui-org/react';
import { CompleteItem } from '../../app/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckboxItem } from '../checkbox';

type Props = {
  list: CompleteItem[];
}

type Form = {
  name?: string;
  email: string;
  telephone: string;
  model?: string;
  description?: string;
}

export const Form = ({list}: Props) => {
  const {handleSubmit, control} = useForm<Form>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      name: "",
      telephone: "",
      model: "",
      description: ""
    }
  });
  const darkBackgroundStyle = {
    backgroundColor: 'black',
    color: 'white',
  };
  const onSubmit = async () => {};
  return (
    <form id='form' className='form' onSubmit={onSubmit}>
      <div className="flex gap-[139px]">
        <div className='w-[42%]'>
          <Input 
            type='text'
            label="имя"
            variant='underlined'
            className="dark flex text-primary-100 w-full text-tiny pb-[45px]"
            labelPlacement='outside'
            isRequired={true}
            size='md'
          />
          <Input 
            type='email'
            label="email"
            variant='underlined'
            className="save flex text-primary-100 w-full pb-[45px]"
            labelPlacement='outside'
            isRequired={true}
            size='md'
          />
          <Input 
            type='tel'
            label="телефон"
            variant='underlined'
            className="save flex text-primary-100 w-full"
            labelPlacement='outside'
            isRequired={true}
            size='md'
          />
        </div>
        <div className="w-[42%] flex flex-col justify-between">
          <Autocomplete
            label="марка устройства"
            labelPlacement='outside'
            defaultItems={list}
            variant='underlined'
            className='save text-primary-100 border-background'
            style={{ ...darkBackgroundStyle }}
          >
            {item => <AutocompleteItem key={item.id} className='save bg-background border-background text-primary-100'>{item.name}</AutocompleteItem>}
          </Autocomplete>
          <Textarea
            label="описание проблемы" 
            labelPlacement='outside'
            rows={60}
            variant='underlined'
            className="save flex text-primary-100 w-full"
          />
        </div>
      </div>
      <div className="check mt-[28px]">
        <CheckboxItem
          text={
            <p className='save text-primary-50 text-small'>
              я согласен с <Link href='#' className='underline save text-primary-100 text-small'>правилами обработки персональных данных</Link>
            </p>
          } 
        />
      </div>
      <Button
        type='submit'
        variant='bordered'
        as='a'
        className='text-small py-[8px] px-[77px] r-fs save text-primary-50 line-small-sd h-[50px] mt-[60px]'
        onClick={(e) => e.preventDefault()}
      >
        Отправить
      </Button>
    </form>
  )
}

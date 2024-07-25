import React from 'react'
import {Checkbox} from "@nextui-org/react";

type Props = {
    text: React.JSX.Element;
}

export const CheckboxItem = ({text}: Props) => {
  return (
    <Checkbox>
        {text}
    </Checkbox>
  )
}

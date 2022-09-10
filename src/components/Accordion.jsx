import React, { useState } from 'react'
import Input from './Input'

export default function Accordion() {
    const [value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value);

  return (
    <div>
        <Input onChange={handleChange} defaultValue={value}></Input>
        <p>{value}</p>
    </div>
  )
}

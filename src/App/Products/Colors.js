import React from "react"

import { Dropdown } from 'semantic-ui-react'




const Colors = [
    {
        key: 'yellow',
        text: 'Желтый',
        value: 'red',
        
    },
    {
        key: 'green',
        text: 'Зеленый',
        value: 'green',
    },
    {
        key: 'red',
        text: 'Красный',
        value: 'red',
    },
    {
        key: 'white',
        text: 'Белый',
        value: 'white',
    },
    
]

const DropdownSelection = () => (
    <Dropdown
        placeholder='Цвет'
        fluid
        selection
        options={Colors}
    />
)

export default DropdownSelection

import React from "react"

import { Dropdown } from 'semantic-ui-react'




const Colors = [
    {
        key: 'red',
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
    // {
    //     key: 'Justen Kitsune',
    //     text: 'Justen Kitsune',
    //     value: 'Justen Kitsune',
    //     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
    // },
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

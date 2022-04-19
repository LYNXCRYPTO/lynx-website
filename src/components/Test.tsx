import React from 'react'

interface Props {
    age: number,
    weight?: number
}

const Test = (props: Props) => {
    return (
        <div>
            Hello Jordan {props.age}
        </div>
    )
}

export default Test

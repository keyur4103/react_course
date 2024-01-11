import React from 'react'
import { useState } from 'react'

export default function Myfunction1() {
    const [name,setname] = useState("myname");
    const [age,setage] = useState(99);
    return (
        <>
            <input type='text'
            value={name}
            onChange={(e)=> setname(e.target.value)
            }/>
            <p>name:{name}</p>
            <input type='number'
            value={age}
            onChange={(e)=> setage(e.target.value)
            }/>
            <p>Age:{age}</p>
        </>
    )
}

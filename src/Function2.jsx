import React from 'react'
import { useState, useEffect } from 'react';
function fetchdata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "abc" });
        }, 3000);
    })
}

export default function Function2() {
    const [name, setname] = useState("loding..");
    const [id, setid] = useState("loding..");

    useEffect(() => {
        fetchdata().then((user)=>{
            setid(user.id)
            setname(user.name)
        })
    })
    return (
        <>
            <p>id: {id}</p>
            <p>name: {name}</p>
        </>
    )
}

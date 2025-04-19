import React, { useState } from 'react'
import Button from './Button'

const FormAddFriend = ({getFriend}) => {
    const id=crypto.randomUUID();
    const [name,setName]=useState("")
    const [image,setImage]=useState("https://i.pravatar.cc/48?u=118836")
    function handleSubmit(e){
        e.preventDefault();
        if(!name || !image) return;
        const newFriend={
            name,
            image:`${image}?=${id}`,
            balance:0,
            id:id
        }
        getFriend(newFriend)
        setImage("https://i.pravatar.cc/48?u=118836")
        setName("")
    }
    return (
        <>
            <div>
                <form className="form-add-friend" onSubmit={handleSubmit}>
                    <label htmlFor="">🤼Friendname</label>
                    <input type="text" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)}/>

                    <label htmlFor="">📷 Image URL</label>
                    <input type="text" name="image" id="" value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <Button>
                        Submit
                    </Button>
                </form>
            </div>

        </>
    )
}

export default FormAddFriend
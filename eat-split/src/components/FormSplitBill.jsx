import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({ selectedFriend,onSplitBill }) => {
    const [bill, setBill] = useState("");
    const [expense, setExpense] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const padiByFriend = bill ? bill - expense : ""
    function handleBill(e) {
        e.preventDefault()
        if (!bill || !expense) return;
        onSplitBill(whoIsPaying === 'user' ? padiByFriend : -expense)
    }
    return (
        <>
            <form className="form-split-bill" onSubmit={handleBill}>
                <h2>Split a bill with {selectedFriend.name}</h2>
                <label htmlFor="">💰 Bill value</label>
                <input type="text" name="" id="" value={bill} onChange={(e) => setBill((Number(e.target.value)))} />

                <label htmlFor="">🤺 Your Expense</label>
                <input type="text" name="" id="" value={expense}
                    onChange={(e) => setExpense(Number(e.target.value) > bill ? expense : Number(e.target.value))} />

                <label htmlFor="">🤼 {selectedFriend.name} Expense</label>
                <input type="text" disabled value={padiByFriend} />
                <label htmlFor="">💰 Who is paying the bill</label>
                <select value={whoIsPaying} onChange={(e) =>setWhoIsPaying(e.target.value)}>
                    <option value="user">You</option>
                    <option value="friend"> {selectedFriend.name}</option>
                </select>
                <Button>
                    Submit
                </Button>
            </form>
        </>


    )
}

export default FormSplitBill
import { CardElement } from './CardElement'
import React, { useState } from 'react'

const Card = () => {
    const questions = [
        {
            id: 1,
            question: "What is an object in JavaScript?",
            answer: "A collection of key-value pairs used to store data."
        },
        {
            id: 2,
            question: "How do you create an object?",
            answer: "Using object literals: const obj = {}; or constructors: const obj = new Object();"
        },
        {
            id: 3,
            question: "How to add a property to an object?",
            answer: "Use dot notation: obj.key = value; or bracket notation: obj['key'] = value;"
        },
        {
            id: 4,
            question: "How to delete a property from an object?",
            answer: "Use the delete operator: delete obj.key;"
        },
        {
            id: 5,
            question: "What is a method in an object?",
            answer: "A function assigned as a property of an object."
        },
        {
            id: 6,
            question: "How to check if a property exists in an object?",
            answer: "Use 'key' in obj; or obj.hasOwnProperty('key');"
        },
        {
            id: 7,
            question: "What is a prototype in JavaScript?",
            answer: "An object from which other objects inherit properties."
        },
        {
            id: 8,
            question: "How to copy an object?",
            answer: "Use Object.assign({}, obj); or spread syntax: {...obj};"
        },
        {
            id: 9,
            question: "What is the difference between == and ===?",
            answer: "== compares values with type coercion; === compares values without type coercion."
        },
        {
            id: 10,
            question: "How to iterate over object properties?",
            answer: "Use for...in loop or Object.keys(obj).forEach()."
        }
    ];
    const [activeId, setActive] = useState(null);
    function showAnswer(id) {
        setActive(prev => prev === id ? null : id);
    }

    return (
        <>
            <div className="center">
                <h4 className='center'>Card Task</h4>
            </div>
            <div className="card">
                {
                    questions.map((e) => {
                        return <CardElement data={e} key={e.id} isActive={e.id === activeId} onClick={() => showAnswer(e.id)}  />
                    })
                }
            </div>
        </>
    )
}

export default Card
//if a parent is maintaining the state, pass the onClick to a child and it's important
export const CardElement = ({ data ,isActive,onClick}) => {

    return (
        <div className={isActive ? 'bg cardElement' : 'cardElement'} onClick={onClick}>
            {isActive ? <p> {data.answer}</p> : <h3>{data.question}</h3>}
        </div >
    )
}

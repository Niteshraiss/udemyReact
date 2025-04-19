import React from 'react'
import Friend from './Friend'

const FriendsList = ({ friends,onSelection,selectedFriend}) => {
    return (
        <>
            {friends.map((e) => {
                return <Friend friend={e} key={e.id} onSelection={onSelection} selectedFriend={selectedFriend} />
            })}
        </>
    )
}

export default FriendsList
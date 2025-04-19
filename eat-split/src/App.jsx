
import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const showFriend = () => {
    setShowAddFriend(pro => !pro)
  }
  //selection of friend
  function handleSelection(friend) {
    // setSelectedFriend(friend)
    setSelectedFriend((pre) => (pre?.id === friend.id ? null : friend))
    setShowAddFriend(false)
  }
  function getFriend(friend) {
    setFriends(pre => [...pre, friend])
    setShowAddFriend(false)
  }
  function handleSplitBill(value) {
    setFriends(friends => friends.map(friend=>friend.id===selectedFriend.id ? {...friend,balance:friend.balance + value}
      :friend
    ))
    setSelectedFriend(null)
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection} />

          {showAddFriend &&
            <FormAddFriend getFriend={getFriend} />
          }
          <Button onClick={showFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
      </div>
    </>
  )
}

export default App

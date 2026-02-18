import { useState } from "react";
import "./chatList.css"
import AddUser from "./addUser/AddUser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="Search icon" />
                <input type="text" name="" id="" placeholder="Search"/>
            </div>
            <img src= {addMode ? "./minus.png" : "./plus.png"} alt="New chat icon" className="newChat" onClick={() => setAddMode((prev) => !prev)} />
        </div>
        <div className="item">
            <img src="./avatar.png" alt="Avatar image" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hola</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="Avatar image" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hola</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="Avatar image" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hola</p>
            </div>
        </div>
        {addMode && <AddUser />}
    </div>
  )
}

export default ChatList
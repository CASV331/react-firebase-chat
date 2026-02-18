import "./addUser.css";
import { useState } from "react";

const AddUser = () => {
  return (
    <div className="addUser">
        <form action="">
            <input type="text" placeholder="Username" name="userName" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Username</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser
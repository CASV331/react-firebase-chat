import "./userInfo.css"

const UserInfo = () => {
  return (
    <div className="userInfo">
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Jhon doe</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="More Icon" />
            <img src="./video.png" alt="Video Icon" />
            <img src="./edit.png" alt="Edit Icon" />

        </div>
    </div>
  )
}

export default UserInfo
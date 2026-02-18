import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore"

const UserInfo = () => {
    const {currentUser} = useUserStore()
  return (
    <div className="userInfo">
        <div className="user">
            <img src={currentUser.avatar_url || "./avatar.png"} alt="Profile Picture" />
            <h2>{currentUser.username}</h2>
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
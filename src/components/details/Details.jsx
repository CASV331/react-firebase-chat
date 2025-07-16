import "./details.css"

const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="Profile picture" />
        <h2>Jhon Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy / help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowUp.png" alt="" />
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://i.redd.it/my3f6yu41ycf1.png" alt="" />
              <span>Photo_2025_14.png</span>
            </div>
              <img src="./download.png" className="icon" alt="" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://i.redd.it/my3f6yu41ycf1.png" alt="" />
              <span>Photo_2025_14.png</span>
            </div>
              <img src="./download.png" className="icon" alt="" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://i.redd.it/my3f6yu41ycf1.png" alt="" />
              <span>Photo_2025_14.png</span>
            </div>
              <img src="./download.png" className="icon" alt="" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://i.redd.it/my3f6yu41ycf1.png" alt="" />
              <span>Photo_2025_14.png</span>
            </div>
              <img src="./download.png" className="icon"alt="" />
          </div>
        </div>
        </div>
        <div className="option">
          <div className="title">
            <span>shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      <button>Block user</button>
      <button className="Logout">Logout</button>
      </div>
    </div>

  )
}
export default Details

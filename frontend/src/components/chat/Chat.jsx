import { useEffect, useRef, useState } from "react"
import EmojiPicker from "emoji-picker-react"
import "./chat.css"

const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    },[]);
    const handleEmoji = e => {
        setText(prev => prev + e.emoji);
        setOpen(false);
    }
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="User image" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <img src="./avatar.png" alt="User profile picture" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo facere distinctio mollitia ut modi aliquam autem sunt esse dicta.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="User profile picture" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo facere distinctio mollitia ut modi aliquam autem sunt esse dicta.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <img src="./avatar.png" alt="User profile picture" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo facere distinctio mollitia ut modi aliquam autem sunt esse dicta.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="User profile picture" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo facere distinctio mollitia ut modi aliquam autem sunt esse dicta.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://i.redd.it/my3f6yu41ycf1.png" alt="User profile picture" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo facere distinctio mollitia ut modi aliquam autem sunt esse dicta.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div ref={endRef}/>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="Image selector icon" />
                    <img src="./camera.png" alt="Camera function icon" />
                    <img src="./mic.png" alt="Voice message icon" />
                </div>
                <input 
                type="text" 
                placeholder="Type a message..." 
                onChange={e=>setText(e.target.value)} 
                value={text}
                />
                <div className="emoji">
                    <img 
                    src="./emoji.png" 
                    alt="Emoji select icon" 
                    onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                    <EmojiPicker
                    open={open} 
                    onEmojiClick={handleEmoji}
                    />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )}
export default Chat
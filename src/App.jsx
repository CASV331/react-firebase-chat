import Login from "./components/login/Login"
import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Details from "./components/details/Details"
import Notification from "./components/notification/Notification"
const App = () => {
  
  const user = true;

  return (
    <div className='container'>
      {user ? (
      <>
      <List />
      <Chat />
      <Details />
      </> )
      : (
      <Login />
      )}
      <Notification />
    </div>
  )
}

export default App
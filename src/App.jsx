import Login from "./components/login/Login"
import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Details from "./components/details/Details"

const App = () => {
  
  const user = false;

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
    </div>
  )
}

export default App
import Login from "./components/login/Login"
import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Details from "./components/details/Details"
import Notification from "./components/notification/Notification"
import { useEffect } from "react"
import { supabase } from "./lib/supaBase"
import { useUserStore } from "./lib/userStore"
const App = () => {
  
  const {currentUser, isLoading, fetchUserInfo} = useUserStore()
  
  useEffect(() => {

    // Listen for session changes
    const {data: authListener} = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const user = session?.user
        await fetchUserInfo(user?.id);
      }
    );
    // Subscription cleanup
    return () => {
      authListener.subscription.unsubscribe();
      
    };

  },[fetchUserInfo])

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {currentUser ? (
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
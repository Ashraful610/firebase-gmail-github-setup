import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app)
         
function App() {
  const [user,setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
   signInWithPopup(auth , googleProvider)
   .then(result => {
     const user = result.user
     setUser(user)
     console.log(user)
   })
   .catch(error => {
     console.error ('error',error.message)
   })
  }
  
  const handleGithubSignIn = () => {
    signInWithPopup(auth , githubProvider)
    .then(result => {
      const user = result.user
      setUser(user)
      console.log(user)
    })
    .catch(error => {
       console.error(error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(()=> {
      setUser({})
    })
    .catch(()=> {
      setUser({})
    })
  }
  return (
    <div className="App">
        <h2> WORK HARD SEE DREAM BIG NEVER GIVE UP</h2>
        <h4>Name : {user.displayName}</h4>
        <img src={user.photoURL} alt="" /> 
        <br />
      {
     user.uid ?<button onClick={handleSignOut} className='m-4'>Sign Out</button> : 
          <>
            <button onClick={handleGoogleSignIn} >Google sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </>
       }
         
    </div>
  );
}

export default App;

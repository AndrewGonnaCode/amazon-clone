
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EmailList from './Body/EmailList/EmailList';
import Mail from './Body/Mail/Mail';
import Header from './Header/Header';
import { selectSendMessageIsOpen } from './redux/mailSlice';
import SendMail from './SendMail/SendMail';
import Sidebar from './Sidebar/Sidebar';
import {login, selectUser} from './redux/userSlice'
import Login from './Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
  },[])

  return (
    <BrowserRouter>
    {!user ? (
      <Login/>
    ):(
      <div className="app">
       <Header/>
       <div className="app__body">
          <Sidebar/>
          <Switch>
             <Route path="/mail">
               <Mail/>
             </Route>
             <Route path="/">
               <EmailList/>
             </Route>
          </Switch>
       </div>
      {sendMessageIsOpen && <SendMail/>}
    </div>
    )}
    </BrowserRouter>
  );
}

export default App;

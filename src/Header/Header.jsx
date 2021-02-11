import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../firebase';
import { logout, selectUser } from '../redux/userSlice';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const Logout = ()=>{
       auth.signOut().then(()=>{
        dispatch(logout())
       })
    }
 
    return (
        <div className="header">
            <div className="header__left">
               <IconButton>
                   <MenuIcon/>
               </IconButton>
               <img src="https://4.bp.blogspot.com/-XwYVc0LaiWA/Xej49Dn95SI/AAAAAAAA-UY/uBS1hBAlvXwZSdlBVicGftNgnFlmme7cwCLcBGAsYHQ/w1200-h630-p-k-no-nu/gmail.jpg"/>
            </div>
            
            <div className="header__middle">
               <SearchIcon/>
               <input type="text" placeholder="Search mail"/>
               <ArrowDropDownIcon className="header__inputCaret"/>
            </div>

            <div className="header__right">
               <IconButton>
                   <AppsIcon/>
               </IconButton>
               <IconButton>
                   <NotificationsIcon/>
               </IconButton>
               <Avatar src={user?.photoUrl} className="avatar" onClick={Logout}/>
            </div>
        </div>
    )
}

export default Header

import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../firebase';


function EmailList() {
  
    const [emails, setEmails] = useState([])

    useEffect(()=>{
        db.collection('emails').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>{
            setEmails(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data()
                }))
            )
        })
    })
   

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected={true}/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"/>
            </div>
            <div className="emailList__list">
                {emails.map(({id, data:{to, subject, message,timestamp}})=>(
                    <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
            ))}
               <EmailRow title="Twitch" subject="Hey follow Me" description="This is test" time="10pm"/>    
            </div> 
        </div>
    )
}

export default EmailList

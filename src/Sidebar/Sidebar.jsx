import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import { Inbox } from '@material-ui/icons';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import CallIcon from '@material-ui/icons/Call';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../redux/mailSlice';

function Sidebar() {
  const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>}
             className="sidebar__compose"
             onClick={()=>dispatch(openSendMessage())}
            >
                Compose
            </Button>
            <SidebarOption Icon={Inbox} title="Inbox" number="54" selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number="62" />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="62" />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number="62" />
            <SidebarOption Icon={NearMeIcon} title="Sent" number="62" />
            <SidebarOption Icon={NoteIcon} title="Drafts" number="62" />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number="62" />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                      <PersonIcon/>
                    </IconButton>
                    <IconButton>
                      <DuoIcon/>
                    </IconButton>
                    <IconButton>
                      <CallIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/navigation';

export default function DrawerLeft(props) {
    var { drawerState, handleDrawerLeftToggle } = props

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerLeftToggle(false)}
            onKeyDown={handleDrawerLeftToggle(false)}
        >
            <List>
                <ListItem onClick={() => handleLink("/create")} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Create"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor={"left"}
                open={drawerState}
                onClose={handleDrawerLeftToggle(false)}
                onOpen={handleDrawerLeftToggle(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}


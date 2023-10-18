import { CreateOutlined } from '@mui/icons-material'
import { Box, Button, styled, List, ListItem } from '@mui/material'
import React from 'react';
import { SIDEBAR_DATA } from '../config/sidebar.config';


const Container = styled(Box)`
    padding: 17px;
    padding-top:16px
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`

const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`

const SideBarContent = () => {
  return (
    <Container>
        <ComposeButton> 
        <CreateOutlined /> Compose
        </ComposeButton>
       <List>
        {
            SIDEBAR_DATA.map(data=>(
                <ListItem>
                   <data.icon fontSize='small' /> {data.title}
                </ListItem>
            ))
        }
       </List>
    </Container>
  )
}

export default SideBarContent
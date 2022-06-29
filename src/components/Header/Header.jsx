import React from "react";
import { NavLink } from "react-router-dom"
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material'
import "./Header.scss"

const Header = props => {
    return (
        <div className="Header">
            <AppBar component="nav">
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button as={NavLink} to="/" sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        <Button as={NavLink} to="/tiempo" sx={{ color: '#fff' }}>
                            El tiempo
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header 
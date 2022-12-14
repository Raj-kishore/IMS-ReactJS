import Head from "next/head";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../../styles/Menu.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


import { Grid, Paper, Button, CardActionArea, CardActions, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



export default function Home() {

    const [userName, setUserName] = useState();
    const { data: session } = useSession();
    const router = useRouter();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        signOut();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}

        >
            <MenuItem >Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 2 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );



    //const { accessToken } = data;
    // if(true){ // testing whther ErrorBoundary class handling the error or not
    //     throw new Error("Something went wrong. pls contact naffal.report@gmail.com"); // this will throw error when the user lands at menu page. 
    // }

    if (session) {
        return <>
            <div className={styles.container}>
                <Head>
                    <title>Bebsaa Menu</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar className={styles.appbarcolor} position="static">
                        <Toolbar>
                            {/* <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton> */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Bebsaa.com
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                <IconButton
                                    size="large"
                                    aria-label="show 2 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={2} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
                <main className={styles.main}>

                    {/* <button onClick={() => signOut()}>Sign out</button> */}
                    {/* <div>Access Token: {accessToken}</div> */}




                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        justifyContent="center"

                    >
                        <Grid item xs={3}>
                            <Item className={styles.menuCard}>

                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/images/inventory.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Inventories
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Place to store your Inventories list.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link href="/inventory"> 
                                        <Button size="small" color="primary">
                                            Go to Inventories
                                        </Button>
                                        </Link>
                          
                                    </CardActions>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item className={styles.menuCard}>

                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/images/invoice.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Invoices
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Manage invoices.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Go to Invoices
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item className={styles.menuCard}>

                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/images/report.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Reports
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                CHECK PROFIT AND LOSS ANALYTICS
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Go to analytics
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Item>
                        </Grid>


                    </Grid>





                    <div className={styles.footer}>
                        Copyrights 2022 | All Rights Reserved
                    </div>
                </main>
            </div>
        </>
    } else {
        //   router.push('/')
    }


    // return <>

    //     <div className={styles.container}>
    //         <Head>
    //             <title>IMS Home Page</title>
    //             <link rel="icon" href="/favicon.ico" />
    //         </Head>
    //         <main className={styles.main}>
    //             Not signed in <br />
    //             <button onClick={() => signIn()}>Sign in</button>
    //             {/* <div>Access Token: {accessToken}</div> */}
    //             <div className={styles.footer}>
    //                 Copyrights 2022 | All Rights Reserved
    //             </div>
    //         </main>
    //     </div>
    // </>


}

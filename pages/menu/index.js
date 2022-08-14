import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Menu.module.scss";
import { styled } from '@mui/material/styles';
import Link from 'next/link'

import { Grid, Paper, Button, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Home() {

    const [userName, setUserName] = useState();


    return (
        <div className={styles.container}>
            <Head>
                <title>IMS Home Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p>Logged in as {userName}</p>
                <p>
                <Link href="/">
          <a>Logout</a>
        </Link>
                    
                    </p>
                {/* <Grid  
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        rowSpacing={1} 
        spacing={2}
        >
        
<h1>menu page</h1>


        </Grid> */}

                <div className={styles.footer}>
                    Copyrights 2022 | All Rights Reserved
                </div>
            </main>
        </div>
    );
}

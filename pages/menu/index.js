import Head from "next/head";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../../styles/Menu.module.scss";
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';


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
    const { data: session } = useSession();
    const router = useRouter();

    //const { accessToken } = data;

    if (session) {
        return <>
            <div className={styles.container}>
                <Head>
                    <title>IMS Home Page</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                    {/* <div>Access Token: {accessToken}</div> */}
                    <div className={styles.footer}>
                        Copyrights 2022 | All Rights Reserved
                    </div>
                </main>
            </div>
        </>
    }else{
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

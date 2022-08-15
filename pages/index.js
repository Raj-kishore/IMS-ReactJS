import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'


import { Grid, Paper, Button, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()

  if (session) {
    //redirect to menu
    router.push('/menu')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Bebsaa Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          rowSpacing={1}
          spacing={2}
        >
          <Grid item xs={6}>
            <Item className={styles.gridBorder}>
              <Image
                className={[styles.leftPanel , styles.makeImageCircular].join(" ")}
                src="/images/download.jpeg"
                alt="You are as shop owner"
                width={500}
                height={500}
              />
            </Item>
          </Grid>
          <Grid item xs={6}
          >
            <Item className={styles.gridBorder}>
              <Image
                className={styles.makeImageCircular}
                src="/images/shop-owner.jpg"
                alt="You are as shop owner"
                width={150}
                height={150}
              />
              {/* <h1>BeBSaa</h1> */}
              <h4>Open your Business online in 2 minutes</h4>
              <h4>and Let others discover you online.</h4>
              <h5>Bebsaa is free and easy to use</h5>
              <FormControl>
                {/* <TextField
                  helperText="Please enter your phone number or email to login"
                  id="my-input"
                  label="Phone number or Email"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                /> */}
                {/* <Link href="/menu"> */}
                  <Button variant="outlined" onClick={() => signIn()}>
                    sign in
                  </Button>

                  
                {/* </Link> */}
              </FormControl>
            
            </Item>
          </Grid>
        </Grid>
        <div className={styles.footer}>
          Copyrights 2022 | All Rights Reserved
        </div>
      </main>
    </div>
  );
}

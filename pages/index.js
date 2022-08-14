import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from 'next/image';
import { styled } from '@mui/material/styles';

import { Grid, Paper, Button, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IMS Home Page</title>
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
          <Grid  item xs={6}>
            <Item className={styles.gridBorder}>
              <Image
                className={styles.leftPanel}
                src="/images/shop-owner.jpg"
                alt="You are as shop owner"
                width={500}
                height={500}
              />
            </Item>
          </Grid>


          <Grid    item xs={6} 
           
          >
            <Item className={styles.gridBorder}>
              <h1>OnShop</h1>
              <h4>Open your Shop online in 2 minutes</h4>
             <h4>and Let others discover your business online.</h4>

                <FormControl>
                  <TextField
                    helperText="Please enter your phone number to login"
                    id="my-input"
                    label="Phone number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  />
                  <Button variant="outlined">Login</Button>

                </FormControl>
            
<h5>OnShop is free of cost</h5>
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

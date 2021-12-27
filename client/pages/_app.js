import '../styles/globals.css';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Navbar from '../components/marginals/Navbar';
import Footer from '../components/marginals/Footer';

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <Grid container direction='column' justifyContent='space-between' alignItems='center'>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item>
        <Component {...pageProps} />
      </Grid>
      <Grid item className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default MyApp;

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    bottom: 0
  },
});
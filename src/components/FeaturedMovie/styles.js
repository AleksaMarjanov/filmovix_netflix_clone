import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',
    textDecoration: 'none',
  },
  card: {
    width: '100px',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  cardRoot: {
    position: 'relative',
  },
  cardMedia: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.75)',
    backgroundBlendMode: 'darken',
  },
  cardContent: {
    color: '#fff',
    width: '40%',
    [theme.breakpoints.down('sm')] : {
        width: '100%',
    }
  },
  cardContentRoot: {
    position: 'relative',
    backgroundColor: 'transparent',
  }
}));

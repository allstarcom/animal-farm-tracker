// src/styles/globalStyles.js
import { makeStyles } from '@mui/styles';

const useGlobalStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '64px',
  },
}));

export default useGlobalStyles;

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
  },
}));

export default useGlobalStyles;

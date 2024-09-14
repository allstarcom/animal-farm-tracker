// src/styles/farmStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  farmListContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px',  // Add space between farm cards
    justifyContent: 'flex-start', // Align items to the start of the container
    marginTop: '20px',  // Spacing from the top of the container
  },
  farmCard: {
    flex: '1 1 calc(25% - 16px)',  // Responsive width with space between cards
    minWidth: '200px',  // Minimum width of the card
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    boxSizing: 'border-box', // Ensure padding and border are included in the width and height
    transition: 'all 0.3s ease', // Smooth transition for hover effect
    '&:hover': {
      backgroundColor: '#e0f7fa',  // Change background color on hover
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', // Enhance shadow on hover
      transform: 'scale(1.03)', // Slightly enlarge card on hover
    },
  },
  farmName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  farmLocation: {
    fontSize: '16px',
    color: '#666',
  },
}));

export default useStyles;

// src/components/FarmList.js
import React from 'react';
import useFarmData from '../hooks/useFarmData';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import { Agriculture, Delete, Edit, LocationOn } from '@mui/icons-material';
import useStyles from '../styles/farmStyles';
import DynamicTable from './DynamicTable';


export default function FarmList() {
    const { farmList, editFarm, deleteFarm } = useFarmData();
    const classes = useStyles();
    // Define the columns dynamically for the farm
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor matches the key in your farmList data
                Cell: ({ row }) => (
                    <Link to={`/farms/${row.original._id}`} key={row.original._id} style={{ textDecoration: 'none' }}>
                        <Card key={row.original._id} className={classes.farmCard}>
                            <CardContent>
                                <Typography variant="h5" className={classes.farmName}>
                                    {row.original.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ),
            },
            {
                Header: 'Location',
                accessor: 'location',
            },
            {
                Header: 'Actions',
                id: 'actions',
                Cell: ({ row }) => (
                    <div>
                        <IconButton
                            color="primary"
                            onClick={() => editFarm(row.original._id)}
                        >
                            <Edit /> {/* Display Edit Icon */}
                        </IconButton>
                        <IconButton
                            color="red"
                            onClick={() => deleteFarm(row.original._id)}
                        >
                            <Delete /> {/* Display Delete Icon */}
                        </IconButton>
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <Box>
            <DynamicTable columns={columns} data={farmList} />
            {/* <Box className={classes.farmListContainer}>
                {farmList.map((farm) => (
                    <Link to={`/farms/${farm._id}`} key={farm._id} style={{ textDecoration: 'none' }}>
                        <Card key={farm._id} className={classes.farmCard}>
                            <CardContent>
                                <Typography variant="h5" className={classes.farmName}>
                                    {farm.name}
                                </Typography>
                                <Typography variant="body2" className={classes.farmLocation}>
                                    {farm.location || 'No location specified'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Box> */}
        </Box>
    );
}




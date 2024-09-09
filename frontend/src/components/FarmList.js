// src/components/FarmList.js
import React from 'react';
import useFarmData from '../hooks/useFarmData';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography } from '@mui/material';
import useStyles from '../styles/farmStyles';

export default function FarmList() {
    const { farmList } = useFarmData();
    const classes = useStyles();
    return (
        <Box className={classes.pageContainer}>
            <Box className={classes.farmListContainer}>
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
            </Box>
        </Box>
    );
}

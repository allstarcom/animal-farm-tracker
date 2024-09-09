import { useState } from 'react';
import { useEffect } from 'react';
import { fetchFarms } from '../utils/apis/farmApi';


export default function useFarmData() {
    const [farmList, setFarms] = useState([]);

    useEffect(() => {

        const getAllFarms = async () => {

            try {
                const response = await fetchFarms();
                console.log(response)
                setFarms(response.data);
            } catch (error) {
                console.error('Failed to fetch farms:', error);
            }

        }
        getAllFarms();

    }, []);


    return {
        farmList
    }

}   
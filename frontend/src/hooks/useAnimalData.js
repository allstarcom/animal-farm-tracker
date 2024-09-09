import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAnimals } from '../utils/apis/animalApi';


export default function useAnimalData() {
    const [animalList, setAnimalList] = useState([]);

    useEffect(() => {
        const getAllAnimals = async () => {
            try {
                const response = await fetchAnimals();
                setAnimalList(response.data);
            } catch (error) {
                console.error('Failed to fetch animals:', error);
            }
        }
        getAllAnimals();

    }, []);


    return {
        animalList
    }

}   
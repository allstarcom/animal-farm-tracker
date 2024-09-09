import useAnimalData from '../hooks/useAnimalData';


export default function AnimalList() {
    const { animalList } = useAnimalData(); 

    return (
        <div>
            <h1>Animal List</h1>
            <ul>
                {animalList.map((animal) => (
                    <li key={animal.id}>{animal.name} {animal.vaccinationStatus}</li>
                    
                ))}
            </ul>
        </div>
    )
}   
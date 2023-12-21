import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import DogModal from "./DogModal";
import { TDog } from "./types";

export default function () {
  const { isLoading, error, data } = useQuery("dogList", () =>
    fetch("  //dog.ceo/api/breeds/list/all").then((res) => res.json())
  );
  const [dogs, setDogs] = useState<TDog[]>([]);
  const [selectedDog, setSelectedDog] = useState<TDog | null>(null);

  useEffect(() => {
    if (!data) return;

    const dogData = data.message;
    const dogBreeds = Object.keys(dogData);
    const dogs = dogBreeds.map((breed) => {
      return {
        breed,
        subBreeds: dogData[breed],
        avgHeight: Math.random(),
        avgWeight: Math.random(),
      };
    });
    setDogs(dogs);
  }, [data]);

  return (
    <div>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.breed} onClick={() => setSelectedDog(dog)}>
            {dog.breed}
          </li>
        ))}
      </ul>
      <DogModal dog={selectedDog} close={() => setSelectedDog(null)} />
    </div>
  );
}

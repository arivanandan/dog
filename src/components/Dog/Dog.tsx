import DogImage from "./DogImage";
import { TDog } from "./types";

interface IProps {
  dog?: TDog;
}

export default function ({ dog }: IProps) {
  if (!dog) return null;

  const { breed, subBreeds, avgHeight, avgWeight } = dog;
  const power = avgHeight + avgWeight * 9;
  return (
    <>
      <div>{breed}</div>
      <p>Power: {power}</p>
      <DogImage breed={breed} />
      {!subBreeds.length ? null : (
        <ul>
          {subBreeds.map((subBreed) => (
            <li key={subBreed}>{subBreed}</li>
          ))}
        </ul>
      )}
    </>
  );
}

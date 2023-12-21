import { useQuery } from "react-query";
import { useEffect, useState } from "react";

interface IProps {
  breed: string;
}

export default function ({ breed }: IProps) {
  const { isLoading, error, data } = useQuery(`dogImage-${breed}`, () =>
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then((res) =>
      res.json()
    )
  );
  const [dogImage, setDogImage] = useState<string>();

  useEffect(() => {
    if (!data) return;

    setDogImage(data.message);
  }, [data]);

  if (isLoading) return <div>"Loading .."</div>;
  if (error) return <div>"Error"</div>;
  return <img src={dogImage} />;
}

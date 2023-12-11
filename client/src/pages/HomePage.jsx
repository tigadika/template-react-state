import { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../components/CardItem";

export default function HomePage() {
  const [girlgroups, setGirlgroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page, filter, sort) => {
    setIsLoading(true);

    try {
      const { data } = await axios({
        method: "get",
        url: import.meta.env.VITE_BASE_URL + "/girlgroups",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      setGirlgroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading.... </div>;
  }

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center my-5">Database Group</h2>
        <div className="row row-cols-4 g-3">
          {girlgroups &&
            girlgroups.map((girlgroup) => {
              return <CardItem key={girlgroup.id} girlgroup={girlgroup} />;
            })}
        </div>
      </div>
    </>
  );
}

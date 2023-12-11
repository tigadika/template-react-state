import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const params = useParams();

  const [girlgroup, setGirlgroup] = useState({});

  const fetchDataById = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: import.meta.env.VITE_BASE_URL + "/girlgroups/" + params.id,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      setGirlgroup(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, []);

  return (
    <section id="detail">
      <div className="container my-5">
        <div className="card p-4">
          <h2>{girlgroup.name}</h2>
          <div className="d-flex gap-4">
            <img
              src={girlgroup.imgUrl}
              style={{ height: "22rem", objectFit: "cover" }}
              alt=""
            />
            <div>
              <h3>Name: {girlgroup.name}</h3>
              <h3>Affiliate: {girlgroup.company}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

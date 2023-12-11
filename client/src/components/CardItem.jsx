import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardItem({ girlgroup }) {
  const navigate = useNavigate();

  return (
    <div className="col">
      <div className="card">
        <img
          src={girlgroup.imgUrl}
          style={{ height: "12rem", objectFit: "cover" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{girlgroup.name}</h5>
          <p className="card-text">{girlgroup.company}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/detail/" + girlgroup.id);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

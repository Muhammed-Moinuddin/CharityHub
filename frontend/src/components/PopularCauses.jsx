import React, { useState } from "react";
import axios from "axios";
import CauseCard from "./CauseCard";

export default function PopularCauses(props) {
  const [popularCausesData, setPopularCausesData] = useState({ ready: false });
  function handleResponse(response) {
    setPopularCausesData({
      ready: true,
      data: response.data,
    });
  }

  function getPopularCauses() {
    let apiUrl = import.meta.env.VITE_BACKEND_URL + `api/popular-causes`;
    console.log("apiUrl:" + apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (popularCausesData.ready) {
    console.log(popularCausesData);
    return (
      <div className="popular-cases">
        <CauseCard data={popularCausesData.data} />
      </div>
    );
  } else {
    getPopularCauses();
    return "loading...";
  }
};

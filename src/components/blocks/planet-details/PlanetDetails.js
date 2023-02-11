import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import requestManager from "utils/request";
import {Loading} from "components/base";

const PlanetDetails = () => {
  const {id} = useParams();

  const [loading, setLoading] = useState(true);
  const [planetDetails, setPlanetDetails] = useState({});

  useEffect(() => {
    requestManager()
      .fetchPlanetDetails(id)
      .then((response) => {
        if (response.data) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);

          setPlanetDetails(response.data);
          console.log(response.data);
        }
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="card text-bg-danger">
            <div className="card-header">
              <h1 className="text-capitalize">name : {planetDetails.name}</h1>
            </div>
            <div className="card-body">
              <p className="text-capitalize">climate : {planetDetails.climate}</p>
              <p className="text-capitalize">created : {planetDetails.created}</p>
              <p className="text-capitalize">diameter : {planetDetails.diameter}</p>
              <p className="text-capitalize">edited : {planetDetails.edited}</p>
              <p className="text-capitalize">orbital period : {planetDetails.orbital_period}</p>
              <p className="text-capitalize">population : {planetDetails.population}</p>
              <p className="text-capitalize">terrain : {planetDetails.terrain}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanetDetails;

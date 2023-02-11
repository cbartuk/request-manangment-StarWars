import {Loading} from "components/base";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import req from "utils/request";

const StarshipDetail = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [vehicleDetails, setVehicleDetails] = useState({});

  useEffect(() => {
    const request = req();
    console.log(id);

    request
      .fetchVehicleDetails(id)
      .then((res) => {
        setVehicleDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {vehicleDetails && (
        <div className="container">
          {isLoading && <Loading variant="light" />}
          {!isLoading && (
            <div className="card mt-5 text-bg-dark">
              <div className="row">
                <div className="col-4">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                    onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg")}
                    className="card-img-top"
                    alt={vehicleDetails.name}
                  />
                </div>
                <div className="col-8">
                  <div className="card-header">
                    <h1>{vehicleDetails.name}</h1>
                  </div>
                  <div className="card-body">
                    <p>{vehicleDetails.model}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!vehicleDetails && <h1 className="text-capitalize">api content not found</h1>}
    </>
  );
};

export default StarshipDetail;

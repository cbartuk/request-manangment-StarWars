import {Loading} from "components/base";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import req from "utils/request";

const StarshipDetail = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ssDetails, setSsDetails] = useState({});

  useEffect(() => {
    const request = req();
    console.log(id);

    request
      .fetchStarship(id)
      .then((res) => {
        setIsLoading(false);

        setSsDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(ssDetails);

  return (
    <>
      {ssDetails && (
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
                    alt={ssDetails.name}
                  />
                </div>
                <div className="col-8">
                  <div className="card-header">
                    <h1>{ssDetails.name}</h1>
                  </div>
                  <div className="card-body">
                    <p>{ssDetails.model}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!ssDetails && <h1 className="text-capitalize">api content not found</h1>}
    </>
  );
};

export default StarshipDetail;

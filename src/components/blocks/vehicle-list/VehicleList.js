import {Loading} from "components/base";
import React, {useState, useEffect} from "react";
import requestManager from "utils/request";
import {Card} from "components/base";

const VehicleList = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestManager()
      .fetchVehicles()
      .then((response) => {
        if (response) {
          setLoading(false);

          setVehicleList(response.data.results);
          console.log(response.data.results);
        }
      });
  }, []);
  return (
    <section>
      <div className="container">
        {loading ? (
          <Loading variant="primary" />
        ) : (
          <div className="row">
            {vehicleList.map((vehicle, index) => (
              <div key={index} className="col-4 mb-3">
                <Card
                  title={`Name : ${vehicle.name}`}
                  subtitle={`Model : ${vehicle.model}`}
                  id={index + 1}
                  pages="vehicles"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleList;

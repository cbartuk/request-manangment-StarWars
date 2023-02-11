import {Loading} from "components/base";
import {Card} from "components/base";
import {useEffect, useState} from "react";
import requestManager from "utils/request";

const PlanetList = () => {
  const [loading, setLoading] = useState(true);
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    requestManager()
      .fetchPlanets()
      .then((response) => {
        if (response.data) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);

          setPlanetList(response.data.results);
          console.log(response.data.results);
        }
      });
  }, []);
  return (
    <section>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            {planetList.map((planet, index) => (
              <div key={index} className="col-4 mb-3">
                <Card
                  title={`Name : ${planet.name}`}
                  subtitle={`Climate : ${planet.climate}`}
                  id={index + 1}
                  pages="planets"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanetList;

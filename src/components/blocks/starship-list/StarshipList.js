import {Card} from "components/base";
import requestManager from "utils/request";
import {useEffect, useState} from "react";
import {Loading} from "components/base";

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestManager()
      .fetchStarships()
      .then((response) => {
        if (response.data) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);

          setStarships(response.data.results);
          console.log(response.data.results);
        }
      });
  }, []);

  return (
    <section>
      <div className="container">
        {loading ? (
          <Loading variant="light" />
        ) : (
          <div className="row">
            {starships.map((starship, index) => (
              <div key={index} className="col-4 mb-3">
                <Card
                  title={starship.name}
                  subtitle={starship.model}
                  image={`https://starwars-visualguide.com/assets/img/starships/${index + 2}.jpg`}
                  id={index + 2}
                  pages="starships"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StarshipList;

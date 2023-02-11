import {Card, Loading} from "components/base";
import React, {useState, useEffect} from "react";
import requestManager from "utils/request";

const PeopleList = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestManager()
      .fetchPeople()
      .then((response) => {
        if (response.data) {
          setLoading(false);

          setPeopleList(response.data.results);
          console.log(response.data.results);
        }
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading variant="primary" />
      ) : (
        <div className="container">
          <div className="row">
            {peopleList.map((people, index) => (
              <div key={index} className="col-4 mb-3">
                <Card
                  image={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                  title={people.name}
                  subtitle={people.gender}
                  id={index + 1}
                  pages="peoples"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleList;

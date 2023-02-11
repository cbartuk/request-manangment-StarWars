import {Loading} from "components/base";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import requestManager from "utils/request";

const PeopleDetails = () => {
  const {id} = useParams();

  const [loading, setLoading] = useState(true);
  const [peopleDetail, setPeopleDetail] = useState({});

  useEffect(() => {
    requestManager()
      .fetchPeopleDetails(id)
      .then((response) => {
        if (response) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);

          setPeopleDetail(response.data);
          console.log(response.data);
        }
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading variant="success" />
      ) : (
        <div className="card w-50 m-auto mb-5 text-bg-dark">
          <div className="row">
            <div className="col-5">
              <img
                className="card-img"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt={peopleDetail.name}
              />
            </div>
            <div className="col-7">
              <div className="card-body">
                <h5 className="card-title fs-3 fw-bolder text-secondary ">{peopleDetail.name}</h5>
                <p>
                  <span className="text-danger fw-bold">Birth Year</span> : {peopleDetail.birth_year}
                </p>
                <p>
                  <span className="text-danger fw-bold">Created</span> : {peopleDetail.created}
                </p>
                <p>
                  <span className="text-danger fw-bold">Edited</span> : {peopleDetail.edited}
                </p>
                <p>
                  <span className="text-danger fw-bold">Eye Color</span> : {peopleDetail.eye_color}
                </p>
                <p>
                  <span className="text-danger fw-bold">Gender</span> : {peopleDetail.gender}
                </p>
                <p>
                  <span className="text-danger fw-bold">Hair Color</span> : {peopleDetail.hair_color}
                </p>
                <p>
                  <span className="text-danger fw-bold">Height</span> : {peopleDetail.height}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleDetails;

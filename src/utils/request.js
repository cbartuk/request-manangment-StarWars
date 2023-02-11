import axios from "axios";
import {swApiBaseUrl, swApiStarships, swApiPlanets, swApiPeople, swApiVehicles} from "./config";

const instance = axios.create({
  baseURL: swApiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  // params: {
  //   apiKey: "",
  // },
});

// const requestManager = () => {
//   const fetchStarships = async () => {
//     try {
//       const response = await instance.get(swApiStarships);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchStarship = async (id) => {
//     try {
//       const response = await instance.get(`${swApiStarships}/${id}`);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchPlanets = async () => {
//     try {
//       const response = await instance.get(swApiPlanets);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchPlanetDetails = async (id) => {
//     try {
//       const response = await instance.get(`${swApiPlanets}/${id}`);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchPeople = async () => {
//     try {
//       const response = await instance.get(swApiPeople);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchPeopleDetails = async (id) => {
//     try {
//       const response = await instance.get(`${swApiPeople}/${id}`);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchVehicles = async () => {
//     try {
//       const response = await instance.get(swApiVehicles);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   const fetchVehicleDetails = async (id) => {
//     try {
//       const response = await instance.get(`${swApiVehicles}/${id}`);
//       return {data: response.data};
//     } catch (err) {
//       return {error: err.message};
//     }
//   };

//   return {
//     fetchStarships,
//     fetchStarship,
//     fetchPlanets,
//     fetchPlanetDetails,
//     fetchPeople,
//     fetchPeopleDetails,
//     fetchVehicles,
//     fetchVehicleDetails,
//   };
// };

const requestManager = () => ({
  fetchStarships: async () => {
    try {
      const response = await instance.get(swApiStarships);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchStarship: async (id) => {
    try {
      const response = await instance.get(`${swApiStarships}/${id}`);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchPlanets: async () => {
    try {
      const response = await instance.get(swApiPlanets);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchPlanetDetails: async (id) => {
    try {
      const response = await instance.get(`${swApiPlanets}/${id}`);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchPeople: async () => {
    try {
      const response = await instance.get(swApiPeople);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchPeopleDetails: async (id) => {
    try {
      const response = await instance.get(`${swApiPeople}/${id}`);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchVehicles: async () => {
    try {
      const response = await instance.get(swApiVehicles);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
  fetchVehicleDetails: async (id) => {
    try {
      const response = await instance.get(`${swApiVehicles}/${id}`);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  },
});

export default requestManager;

// scss
import "scss/main.scss";
// React Router
import {Routes, Route} from "react-router-dom";
// Layout components
import Layout from "layout/StarWars";
// Pages components
import Home from "pages/Home";
import Starship from "pages/Starship";
import Planet from "pages/Planet";
import People from "pages/People";
import Vehicle from "pages/Vehicle";
import NoMatch from "pages/NoMatch";

// Pages Details components
import StarshipDetail from "pages/StarshipDetail";
import PlanetDetail from "pages/PlanetDetail";
import PeopleDetail from "pages/PeopleDetail";
import VehicleDetail from "pages/VehicleDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="starships">
          <Route index element={<Starship />} />
          <Route path=":id" element={<StarshipDetail />} />
        </Route>
        <Route path="planets">
          <Route index element={<Planet />} />
          <Route path=":id" element={<PlanetDetail />} />
        </Route>
        <Route path="peoples">
          <Route index element={<People />} />
          <Route path=":id" element={<PeopleDetail />} />
        </Route>
        <Route path="vehicles">
          <Route index element={<Vehicle />} />
          <Route path=":id" element={<VehicleDetail />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

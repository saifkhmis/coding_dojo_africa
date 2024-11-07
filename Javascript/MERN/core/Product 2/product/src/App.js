import { Route,Routes } from "react-router-dom";
import ShowOne from "./components/ShowOne";
import Show from "./components/Show"
function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Show/>} />
        <Route path="/product/:id" element={<ShowOne />} />
      </Routes>
    </>
  );
}

export default App;

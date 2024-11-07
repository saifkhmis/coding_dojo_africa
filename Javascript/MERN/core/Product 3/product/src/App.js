import { Route,Routes } from "react-router-dom";
import ShowOne from "./components/ShowOne";
import Show from "./components/Show"
import EditProduct from "./components/EditProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Show/>} />
        <Route path="/product/:id" element={<ShowOne />} />
        <Route path="product/:id/update" element={<EditProduct/>}/>
      </Routes>
      
    </>
  );
}

export default App;

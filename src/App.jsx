import { Routes, Route } from "react-router-dom";
import DetailProduct from "./Component/ShoesProjectFunc/Detail/DetailProduct";
import ShoesProjectFunc from "./Component/ShoesProjectFunc/ShoesProjectFunc";
import ContainerFunc from "./Component/ShoesProjectFunc/ContainerFunc";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <ContainerFunc>
                <ShoesProjectFunc />
              </ContainerFunc>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ContainerFunc>
                <DetailProduct />
              </ContainerFunc>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

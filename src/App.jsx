import InfoUser from "./Component/ShoesProject/InfoUser/InfoUser";
import LoginShoes from "./Component/ShoesProject/Login/LoginShoes";
import RegisterShoes from "./Component/ShoesProject/Register/RegisterShoes";
import ShoesProjectMain from "./Component/ShoesProject/ShoesProjectMain";
import { Routes, Route } from "react-router-dom";
import Main from "./Component/ShoesProjectFunc/Main";
import DetailProduct from "./Component/ShoesProjectFunc/Detail/DetailProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route>
          <Route path="/" element={<ShoesProjectMain />} />
          <Route path="/login" element={<LoginShoes />} />
          <Route path="/register" element={<RegisterShoes />} />
          <Route path="/infoUser" element={<InfoUser />} />
        </Route> */}

        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<DetailProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

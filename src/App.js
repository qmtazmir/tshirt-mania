import "./App.css";
import Home from "./Components/Home/Home";
import OrderReview from "./Components/OrderReview/OrderReview";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="orderReview" element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;

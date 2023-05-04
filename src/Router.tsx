import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Sucess } from "./pages/Sucess";
import Login from "./pages/Login";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Checkout />} />
        <Route path="/sucesso" element={<Sucess />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

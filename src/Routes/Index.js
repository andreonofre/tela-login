import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "../Pages/Signin/Index";
import Signup from "../Pages/Signup/Index";
import Home from "../Pages/Home/Index"

//Novo componente Privatre, que estou passando o Home para a prop dele 
const Private = ({ Item }) => {
  const signed = true;
  console.log(signed) 
  //Se estiver logado, vai passar a Home, se não parra o Signin
  return signed ? <Item /> : <Signin />;

}
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />

          {/* Qualquer outra rota errada cairá no Login */}
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

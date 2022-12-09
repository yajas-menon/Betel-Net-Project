import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from "../pages/Login/Login"
import SignUp from '../pages/SignUp/SignUp';
import forgotPassword from '../pages/Forgotpassword/forgotPassword';
import AddEvent from '../pages/AddEvent/AddEvent';
import contactUs from '../pages/contactUs/contactUs';
import Products from '../pages/Products/Products';
import Pic1 from '../pages/Products2/Pic1';
import Pic2 from '../pages/Products2/Pic2';
import Pic3 from '../pages/Products2/Pic3';
import Pic4 from '../pages/Products2/Pic4';
import Pic5 from '../pages/Products2/Pic5';
import Pic6 from '../pages/Products2/Pic6';
import Pic7 from '../pages/Products2/Pic7';
import Pic8 from '../pages/Products2/Pic8';
import Queries from '../pages/Queries/Queries';

const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
            <Route exact path={ROUTES.contactUs} element={<RouteWithRole Element={contactUs} />}></Route>
            <Route exact path={ROUTES.Products} element={<RouteWithRole Element={Products} />}></Route>
            <Route exact path={ROUTES.Pic1} element={<RouteWithRole Element={Pic1} />}></Route>
            <Route exact path={ROUTES.Pic2} element={<RouteWithRole Element={Pic2} />}></Route>
            <Route exact path={ROUTES.Pic3} element={<RouteWithRole Element={Pic3} />}></Route>
            <Route exact path={ROUTES.Pic4} element={<RouteWithRole Element={Pic4} />}></Route>
            <Route exact path={ROUTES.Pic5} element={<RouteWithRole Element={Pic5} />}></Route>
            <Route exact path={ROUTES.Pic6} element={<RouteWithRole Element={Pic6} />}></Route>
            <Route exact path={ROUTES.Pic7} element={<RouteWithRole Element={Pic7} />}></Route>
            <Route exact path={ROUTES.Pic8} element={<RouteWithRole Element={Pic8} />}></Route>
            <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Login} />}></Route>
            <Route exact path={ROUTES.SignUp} element={<RouteWithRole Element={SignUp} />}></Route>
            <Route exact path={ROUTES.Dashboard} element={<RouteWithRole Element={Dashboard} />}></Route>
            <Route exact path={ROUTES.Forgotpassword} element={<RouteWithRole Element={forgotPassword} />}></Route>
            <Route exact path={ROUTES.AddEvent} element={<RouteWithRole Element={AddEvent} />}></Route>
            <Route exact path={ROUTES.Queries} element={<RouteWithRole Element={Queries} />}></Route>
        </Routes>
    </div>
  )
}

export default Router

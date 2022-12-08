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
import pic1 from '../pages/Products2/pic1';
import pic2 from '../pages/Products2/pic2';
import pic3 from '../pages/Products2/pic3';
import pic4 from '../pages/Products2/pic4';
import pic5 from '../pages/Products2/pic5';
import pic6 from '../pages/Products2/pic6';
import pic7 from '../pages/Products2/pic7';
import pic8 from '../pages/Products2/pic8';


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
            <Route exact path={ROUTES.pic1} element={<RouteWithRole Element={pic1} />}></Route>
            <Route exact path={ROUTES.pic2} element={<RouteWithRole Element={pic2} />}></Route>
            <Route exact path={ROUTES.pic3} element={<RouteWithRole Element={pic3} />}></Route>
            <Route exact path={ROUTES.pic4} element={<RouteWithRole Element={pic4} />}></Route>
            <Route exact path={ROUTES.pic5} element={<RouteWithRole Element={pic5} />}></Route>
            <Route exact path={ROUTES.pic6} element={<RouteWithRole Element={pic6} />}></Route>
            <Route exact path={ROUTES.pic7} element={<RouteWithRole Element={pic7} />}></Route>
            <Route exact path={ROUTES.pic8} element={<RouteWithRole Element={pic8} />}></Route>
            <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Login} />}></Route>
            <Route exact path={ROUTES.SignUp} element={<RouteWithRole Element={SignUp} />}></Route>
            <Route exact path={ROUTES.Dashboard} element={<RouteWithRole Element={Dashboard} />}></Route>
            <Route exact path={ROUTES.Forgotpassword} element={<RouteWithRole Element={forgotPassword} />}></Route>
            <Route exact path={ROUTES.AddEvent} element={<RouteWithRole Element={AddEvent} />}></Route>
        </Routes>
    </div>
  )
}

export default Router

/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index";
import Register from "views/pages/Register";
import Login from "views/pages/Login";
import Contact from "views/pages/Contact";
import World from "views/pages/World";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/web",
  },
  {
    path: "/contact",
    name: "Contact",
    icon: "ni ni-planet text-blue",
    component: Contact,
    layout: "/web",
  },
  {
    path: "/world",
    name: "World",
    icon: "ni ni-planet text-blue",
    component: World,
    layout: "/web",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/web",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/web",
  },
];
export default routes;

import { NavLink, Outlet } from "react-router-dom";
/* import MyHeader from "../Home/Header/MyHeader"; */
import "./Root.css";

function Root() {
  return (
    <>
      <nav>
        {/*   <MyHeader /> */}
        <div className="headerLeft">
          <NavLink to="">E-shop</NavLink>
          <NavLink to="">Notre Histoire</NavLink>
          <NavLink to="/NousContacter">Nous Contacter</NavLink>
        </div>
        <NavLink to="/">
          <h1 className="center">Chez Lisa</h1>
        </NavLink>

        <div className="onglet">
          <input type="text" placeholder="Search here" />
          <NavLink to="">Produit</NavLink>
          <NavLink to="/Compte">Mon compte</NavLink>
          <NavLink to="">Mon Panier</NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Root;

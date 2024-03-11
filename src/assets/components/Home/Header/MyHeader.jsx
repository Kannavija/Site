import "./MyHeader.css";
function MyHeader() {
  return (
    <nav>
      <div className="headerLeft">
        <h2>E-shop</h2>
        <h2>Notre Histoire</h2>
        <h2>Nous contacter</h2>
      </div>
      <h1 className="center">Chez Lisa</h1>

      <div className="onglet">
        <input type="text" placeholder="Search here" />
        <h2>Produit</h2>
        <h2>Mon Compte</h2>
        <h2>Panier </h2>
      </div>
    </nav>
  );
}
export default MyHeader;

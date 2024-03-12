import Patisserie from "../Patisserie";
import "./Produits.css";

function Produit() {
  return (
    <>
      <div className="product-container">
        {Patisserie.map((patisserie, index) => (
          <div className="patisserie" key={index}>
            <img src={patisserie.image} alt={patisserie.name} />
            <p> {patisserie.name}</p>
            <p>{patisserie.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Produit;

import "./MyContent.css";
import AlaUne from "../../Une";

function MyContent() {
  return (
    <>
      <div className="vitrine">
        <img src="src/images/IMG_8751.jpg" alt="Cake" />
      </div>
      <h2 className="laUne">a la une </h2>
      <div className="product-container">
        {AlaUne.map((affiche, index) => (
          <div className="patisserie" key={index}>
            <img src={affiche.image} alt={affiche.name} />
            <p>{affiche.name}</p>
            <p>{affiche.price} $</p>
          </div>
        ))}
      </div>
      <div className="adresse">
        <h2>Retrouver-nous</h2>
        <h2>Nous faisons uniquement sur demande.</h2>
        <div className="buttonTel">
          <button className="tel"> 00 00 00 00 00 </button>
        </div>
      </div>
    </>
  );
}

export default MyContent;

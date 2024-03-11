import "./MyContent.css";
import Patisserie from "../../Patisserie";

function MyContent() {
  return (
    <>
      <div className="vitrine">
        <img src="src/images/IMG_8751.jpg" alt="Cake" />
      </div>

      <div className="product-container">
        {Patisserie.map((patisserie, index) => (
          <div className="patisserie" key={index}>
            <img src={patisserie.image} alt={patisserie.name} />
            <p>{patisserie.name}</p>
            <p>{patisserie.price} $</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyContent;

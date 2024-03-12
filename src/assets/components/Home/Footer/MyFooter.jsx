import "./MyFooter.css";
function MyFooter() {
  return (
    <>
      <section className="myFooter">
        <div className="savoirPlus">
          <h2 className="first"> En Savoir Plus</h2>
          <h2>La Maison</h2>
          <h2>Besoin daide</h2>
        </div>
        <div className="condition">
          <h2 className="first">Nos conditions</h2>
          <h2>Mentions Legales</h2>
          <h2>Données personelles</h2>
        </div>
        <div>
          <h2 className="first">Nous suivre</h2>
          <h2>Instagram</h2>
          <h2>Snapchat</h2>
          {/* <h2>Youtube</h2> */}
        </div>
      </section>
    </>
  );
}
export default MyFooter;

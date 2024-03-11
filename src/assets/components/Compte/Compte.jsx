import "./Compte.css";
const Compte = () => {
  return (
    <>
      <div className="log">
        <h2>Login</h2>
        <form className="form" action="">
          <input className="mail" type="text" placeholder="mail" required />
          <input
            className="password"
            type="password"
            placeholder="Mot de Passe"
            required
          />
          <button className="button" type="submit">
            Se Connecter
          </button>
        </form>
      </div>
    </>
  );
};

export default Compte;

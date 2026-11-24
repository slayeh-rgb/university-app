import "./Header.css";

function Header({ titre, sousTitre }) {
  return (
    <header className="header">
      <h1>{titre}</h1>
      <p>{sousTitre}</p>
    </header>
  );
}
export default Header;

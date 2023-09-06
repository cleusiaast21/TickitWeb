import './Header.css';

export default function Header() {
  return (

    <div className="header">

      <div className="search-container">
        <input className="search" type="search" placeholder="Search movies, cinemas and more..." />
      </div>

      <div className="logo-container">
        <p>TICKIT</p>
      </div>

      <div className="login-container">
        <button >LOGIN</button>
      </div>

    </div>


  );
}


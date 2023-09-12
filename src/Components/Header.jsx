import './Header.css';
import logo from '../assets/tickit_logo.jpg';
import IonIcon from '@reacticons/ionicons';

export default function Header() {
  return (

    <div className="header">

      <div className="search-container">
        <input className="search" type="search" placeholder="Search movies, cinemas and more..." />
      </div>

      <div className="logo-container">
        <img src={logo} alt="" />
      </div>

      <div className="login-container">
        <button>LOGIN</button>
      </div>

    </div>


  );
}


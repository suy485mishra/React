// Title component for display logo
import FoodFireLogo from '../components/2021-09-07.png'
const Title = () => (
    <a href="/">
      <img className="logo" src={FoodFireLogo}  alt="Food Fire Logo" />
    </a>
  );

  // Header component for header section: Logo, Nav Items
 export const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
    </div>
  );
};
  export default Header
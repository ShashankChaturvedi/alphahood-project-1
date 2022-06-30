import "./Header.css";
const Header = () => {
  return (
    <div className="nav">
      <li className="Name">
        <a href="#" className="Name">
          <span className="icon"></span>
          <p>SCRUMVERSE</p>
        </a>
      </li>
      <div className="links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">COURSES</a>
        </li>
        <li>
          <a href="#">BLOGS</a>
        </li>
      </div>
      <div className="loginSignup">
        <li>
          <a href="#" id="login">
            LOGIN
          </a>
        </li>
        <li>
          <a href="#" className="sign">
            SIGN UP
          </a>
        </li>
      </div>
    </div>
  );
};
export default Header;

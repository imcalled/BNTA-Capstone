import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css"
import github from "../Icons/github-icon.png"


const Navbar = () =>{
    let navigate = useNavigate();

    const goHomePage = () => {
      navigate("/");
    };
    return (
      <>
        <div className={"container__navbar"}>
          <h1 className={"navbar__title"}>GainzTracker</h1>
          <div className={"container__navbar_buttons"}>
            <button className={"navbar__button"} onClick={goHomePage}>
              My Dashboard
            </button>
            <button className={"navbar__button"}>Login</button>
            <button className={"navbar__button"}>Signup</button>
            <a href="https://github.com/imcalled/BNTA-Capstone" ><img className={"navbar__icon" } src={github} /></a>
          </div>
        </div>
        <hr/>
      </>
    );
}

export default Navbar;
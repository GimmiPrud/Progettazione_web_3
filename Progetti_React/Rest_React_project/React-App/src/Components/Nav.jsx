// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


function Navb() {

    return (
        <div className="navbar">
            <ul>
                <NavLink to="/dipendenti">
                <li>
                    <button>Dipendenti</button>
                </li>
                </NavLink>
                <NavLink to="/assenze">
                <li>
                <button>Assenze</button>
                </li>
                </NavLink>
                <NavLink to="/progetti">
                <li>
                <button>Progetti</button>
                </li>
                </NavLink>
                <NavLink to="/App">
                <li>
                <button>Home</button>
                </li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Navb;

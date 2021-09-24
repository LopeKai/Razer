import { Link } from 'react-router-dom'

import logo from '../../image/logo.svg'
import '../../style/header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="hamburguer"></div>
            <nav>
                <ul>
                    <li>
                        <Link className="containerLogo" to="/">
                            <img className="logo" src={logo} alt="Razer" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/pc"> Pc </Link>
                    </li>
                    <li>
                        <Link to="/console"> Console </Link>
                    </li>
                    <li>
                        <Link to="/mobile"> Mobile </Link>
                    </li>
                    <li>
                        <Link to="/lifestyle">Lifestyle</Link>
                    </li>
                    <li>
                        <Link to="/services"> Services </Link>
                    </li>
                    <li>
                        <Link to="/community"> Community </Link>
                    </li>
                    <li>
                        <Link to="/support"> Support </Link>
                    </li>
                    <li>
                        {/* <a className="containerIcon" href="#">
                            <ion-icon className="icon" name="search-outline"></ion-icon>
                        </a> */}
                        <Link to="" className="containerIcon">
                            <ion-icon className="icon" name="search-outline"></ion-icon>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="containerIcon" href="#">
                            <ion-icon className="icon" name="cart-outline"></ion-icon>
                        </a> */}
                        <Link to="" className="containerIcon">
                            <ion-icon className="icon" name="cart-outline"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
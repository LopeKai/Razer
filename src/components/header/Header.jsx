import { Link } from 'react-router-dom'

import logo from '../../image/logo.svg'
import './style/header.scss'

export default function Header() {
    function buttonHambuguer() {
        let button = document.getElementById('hamburguer')
        let menu = document.getElementById('containerMenu')

        button.classList.toggle('hambuguer-active')
        menu.classList.toggle('menu-active')
    }
    return (
        <>
            <header className="header">
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
                            <Link to="" className="containerIcon">
                                <ion-icon className="icon" name="search-outline"></ion-icon>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="containerIcon">
                                <ion-icon className="icon" name="cart-outline"></ion-icon>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <header className="header__mobile">
                <div className="hamburguer" id="hamburguer" onClick={buttonHambuguer}></div>

                <Link className="containerLogo" to="/">
                    <img className="logo" src={logo} alt="Razer" />
                </Link>

                <Link to="" className="containerIcon">
                    <ion-icon className="icon" name="cart-outline"></ion-icon>
                </Link>

                <div className="header__mobile-containerMenu" id="containerMenu">
                    <input className="input" type="text" placeholder="Search Razer.com" />
                    <nav>
                        <ul>
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
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )
}
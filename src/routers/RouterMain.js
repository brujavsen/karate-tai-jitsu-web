import React from 'react'
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import Index from '../components/Index';
import Dojos from '../components/Dojos';
import Services from '../components/Services';
import Galery from '../components/Galery';
import Error from '../components/Error';
import { BiMenu, BiX } from "react-icons/bi";

const RouterMain = () => {
    let year = new Date().getFullYear();
    return (
        <BrowserRouter>
            <header className='header'>
                <picture className='logo'>
                    <source className='image_header' srcSet="/logo.webp"  type='image/webp' />
                    <img height={30} width={30} className='image_header' loading='lazy' src="/logo.jpg" alt="logotipo img" />
                </picture>
                <input type='checkbox' id='check'/>
                <label htmlFor='check' className='icons'>
                    <BiMenu id='menu-icon'/>
                    <BiX id='close-icon'/>
                </label>
                <nav className='nav'>
                    <NavLink 
                        to="/index"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Inicio</NavLink>
                    <NavLink 
                        to="/dojos"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Dojos</NavLink>
                    <NavLink 
                        to="/services"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Propuesta Integral</NavLink>
                    <NavLink 
                        to="/galery"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Galeria</NavLink>
                </nav>
            </header>
            {/* Cargar componentes */}
            {/* Aquí se carga el componente que coincide con el path */}
            <Routes>
                <Route path='/' element={<Index/>}></Route>
                <Route path='/index' element={<Index/>}></Route>
                <Route path='/dojos' element={<Dojos/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/galery' element={<Galery/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>

            <footer className='footer'>
                <p>&copy; {year} Derechos Reservados a Gimnasio Gimbo</p>
            </footer>
        </BrowserRouter>
    )
}

export default RouterMain
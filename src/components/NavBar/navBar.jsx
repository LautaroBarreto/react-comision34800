
import logo from '../../assets/logo.png'


function NavBar() {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='music'> </div>

            <div className='link'>
                <a href='/'> Home </a>
                <a href="/"> Pistas </a>
                <a href='/'> Como crear mi canción? </a>
                <a href="/"> Nosotros </a>
                <a href="/"> Ayuda </a>
                <a href="/"> Contacto </a>
                <br/>
                <br/>
            </div>
        </nav>
    )
}

export default NavBar


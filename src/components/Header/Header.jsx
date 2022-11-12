import logo from '/assets/logo.png'
import './Header'
import { link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
        </div>
    )
}

export default Header
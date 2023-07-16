import './Header.css'
import Logo from '../../assets/logo.png'
import Plus from '../../assets/plus.png'

const Header = () => {
    return (
        <header className='header'>
            <h1><img src={Logo} alt="Logo" /> Task Tracker</h1>
            <form>
                <input type="text" placeholder='Add New Task' />
                <button>Create <img src={Plus} alt="icon" /></button>
            </form>
        </header>
    );
};

export default Header;
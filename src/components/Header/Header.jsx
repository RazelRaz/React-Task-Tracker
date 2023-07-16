import './Header.css'
import Logo from '../../assets/logo.png'
import Plus from '../../assets/plus.png'
import { useState } from 'react';


const Header = ({ onAddTask }) => {

    const [title, setTitle] = useState('') 

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTask(title)
        setTitle('')
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    return (
        <header className='header'>
            <h1><img src={Logo} alt="Logo" /> Task Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Add New Task' value={title} onChange={onChangeTitle} />
                <button>Create <img src={Plus} alt="icon" /></button>
                
            </form>
        </header>
    );
};

export default Header;
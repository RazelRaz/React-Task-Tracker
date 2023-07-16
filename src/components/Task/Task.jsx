import './Task.css'
import Trash from '../../assets/trash.png'

const Task = () => {
    return (
        <div className='task'>
            <button className='checkContainer'>
                <div></div>
            </button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore.</p>
            <button className='deleteButton'><img src={Trash} alt="Trash" /></button>
        </div>
    );
};

export default Task;
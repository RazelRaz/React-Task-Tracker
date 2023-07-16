import './Task.css'
import Trash from '../../assets/trash.png'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <button className='checkContainer'>
                <div></div>
            </button>

            <p>{task.title}</p>
            <button className='deleteButton'><img src={Trash} alt="Trash" /></button>
        </div>
    );
};

export default Task;
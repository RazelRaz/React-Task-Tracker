import './Task.css'
import Trash from '../../assets/trash.png'
import Complete from '../../assets/complete.png'

const Task = ({ task, onComplete }) => {
    return (
        <div className='task'>
            <button className='checkContainer' onClick={() => onComplete(task.id)}>
                
                {task.isCompleted ? <img src={Complete} alt="Complete" /> : <div></div>}
            </button>

            <p className={task.isCompleted ? 'textCompleted' : ''}>{task.title}</p>
            <button className='deleteButton'><img src={Trash} alt="Trash" /></button>
        </div>
    );
};

export default Task;
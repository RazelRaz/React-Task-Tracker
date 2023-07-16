import Task from '../Task/Task';
import './Tasks.css'

const Tasks = ({ tasks, onComplete }) => {

    const taskQuantity = tasks.length;
    const taskCompleted = tasks.filter(task => task.isCompleted).length;


    return (
        <section className='tasks'>
            <div className='tasks_header'>
                <div>
                    <p>Create Tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className='textPurple'>Completed</p>
                    <span>{taskCompleted} Of {taskQuantity}</span>
                </div>
            </div>
            <div className='list'>
                {
                    tasks.map(task => (
                        <Task key={task.id} task={task} onComplete={onComplete}></Task>
                    ))
                }
                
            </div>
        </section>
    );
};

export default Tasks;
import Task from '../Task/Task';
import './Tasks.css'

const Tasks = ({ tasks }) => {
    return (
        <section className='tasks'>
            <div className='tasks_header'>
                <div>
                    <p>Create Tasks</p>
                    <span>{tasks.length}</span>
                </div>
                <div>
                    <p className='textPurple'>Completed</p>
                    <span>1 Of 10</span>
                </div>
            </div>
            <div className='list'>
                {
                    tasks.map(task => (
                        <Task key={task.id} task={task}></Task>
                    ))
                }
                
            </div>
        </section>
    );
};

export default Tasks;
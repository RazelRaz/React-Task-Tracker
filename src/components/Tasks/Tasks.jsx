import Task from '../Task/Task';
import './Tasks.css'

const Tasks = () => {
    return (
        <section className='tasks'>
            <div className='tasks_header'>
                <div>
                    <p>Create Tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p className='textPurple'>Completed</p>
                    <span>1 Of 10</span>
                </div>
            </div>
            <div className='list'>
                <Task></Task>
            </div>
        </section>
    );
};

export default Tasks;
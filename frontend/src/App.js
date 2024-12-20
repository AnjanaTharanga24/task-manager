import { ToastContainer } from 'react-toastify';
import Task from './component/Task';
import TaskList from './component/TaskList';

function App() {
  return (
    <div classaName="app">
       <div className='task-container'>
          <TaskList/>
       </div>
       {/* <ToastContainer/> */}
    </div>
  );
}

export default App;

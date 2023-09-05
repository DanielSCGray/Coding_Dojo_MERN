import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import AddForm from './components/AddForm';
import DisplayList from './components/DisplayList';


function App() {

    const [taskList , setTaskList] = useState([]);
    const [isDone, setIsDone] = useState(false);

    const addTask = (newTask) => {
      setTaskList([...taskList, newTask]);
    }

    const updateStatus = (targetIdx, targetBoolean) => {
      let updatedTL = taskList.map( (eachTask, idx) => {
        if (targetIdx == idx) {
          return {...eachTask, isDone: targetBoolean}
        } else { return eachTask}
      }
      )
      setTaskList(updatedTL)
    }

    const deleteTask = (delIdx) => {
      let filteredTaskList = taskList.filter(
        (task, idx) => idx !== delIdx);
      setTaskList(filteredTaskList);
    }
    

  return (
    <div className="App">
      
      <AddForm onNewTask={addTask} />
      <DisplayList updateStatus={updateStatus} taskList={taskList} deleteTask={deleteTask}/>
      

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Tabs from './components/Tabs';

function App() {
  
  const [content, setContent] = useState('');

  const tabList = [{name: 'Tab1', content: 'Tab 1 is the best'}, {name: 'Tab2', content: 'Tab 2 is the best'}, {name: 'Tab3', content: 'Tab 3 is the best'}]

  const contentDisplay = (newContent) => {
    setContent('');
    setContent(newContent);
  }
  
  return (
    <div className="App">
      
      


      <div className="d-grid gap-2 d-md-block">
        <Tabs tabList={tabList} onNewContent={contentDisplay}/>
      </div>
      <div className='card'>
        <div className='card-body'>
          <p>{content}</p>
        </div>
      </div>

    </div>
  );
}

export default App;

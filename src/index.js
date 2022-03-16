import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './components/Task';
import Timer from './components/Timer';
import Completion from './components/Completion';
import TogglePopup from './components/TogglePopup';
import Sharing from './components/Sharing';
import InfoBox from './components/InfoBox';



// final class combining all components
class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Task/>
                <Timer/>
                <TogglePopup/>
                <Completion/>
                <Sharing/>
                <InfoBox/>
            </div>
            
        );
    }
}
  

  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
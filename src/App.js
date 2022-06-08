import { useState } from 'react';
import Draggable from 'react-draggable';
import './App.css';
import { Clock } from './components/Clock';

function App() {
  const [position, setPosition] = useState(0);

  return (
    <div>
      <header className="AppHeader">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 className="Title">Position:</h1>
          <div>
            <input type="radio" id="center" name="center" value={position} />
            <label for="center" className="lable">
              Center
            </label>
            <input
              type="radio"
              id="lowerRight"
              name="lowerRight"
              value={position}
            />
            <label for="css" className="lable">
              Lower Right
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Press ESC key to hide the Window, Enter to show it again</p>
          <Clock />
        </div>
      </header>
      <main className="AppBody">
        <div className="mainBody">
          {/* <div className="dragContainer"></div> */}
          <Draggable
            bounds={{
              left: '100%',
              top: '100%',
              right: '100%',
              bottom: '100%',
            }}
          >
            <div className="dragContainer" />
          </Draggable>
        </div>
      </main>
      <footer className="AppFooter">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;

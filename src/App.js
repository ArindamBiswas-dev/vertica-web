import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';
import { Clock } from './components/Clock';

function App() {
  const [position, setPosition] = useState();
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [center, setPositionCenter] = useState(true);
  const [lowerRight, setPositionLW] = useState(false);

  const dragRelease = (event, data) => {
    // console.log('Drag Release', event, data);
    console.log(data);
    if (data.y > 100 || data.y < -100) {
      setPositionX(0);
      setPositionY(0);
      console.log('center now 1');
    } else {
      setPositionX(data.x);
      setPositionY(data.y);
    }
    if (position) {
      setPosition(null);
    }
  };

  const changePosition = (e) => {
    setPositionX(0);
    setPositionY(0);
    setPosition(e.target.value);
  };

  // useEffect(() => {
  //   console.log('center now');
  //   setPositionCenter(true);
  //   // setPositionX(200);
  //   // setPositionY(200);
  // }, [center]);

  // useEffect(() => {}, [position]);

  const isSelected = (value) => position === value;

  return (
    <div>
      <header className="AppHeader">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 className="Title">Position:</h1>
          <div>
            <input
              type="radio"
              id="center"
              name="center"
              value="center"
              checked={isSelected('center')}
              onChange={changePosition}
            />
            <label for="center" className="lable">
              Center
            </label>
            <input
              type="radio"
              id="lowerRight"
              name="lowerRight"
              value="lowerRight"
              checked={isSelected('lowerRight')}
              onChange={changePosition}
            />
            <label for="lowerRight" className="lable">
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
        <div
          // className="mainBody"
          className={`mainBody ${center ? 'makeItCenter' : ''}`}
        >
          <Draggable
            onStop={dragRelease}
            axis="both"
            position={{ x: positionX, y: positionY }}
          >
            <div
              className="dragContainer"
              style={{
                position: position ? 'absolute' : '',
                top: position === 'center' ? 'calc(50% - 70px)' : '',
                bottom: position === 'lowerRight' ? '70px' : '',
                right: position === 'lowerRight' ? '0' : '',
                transform: '',
              }}
            />
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

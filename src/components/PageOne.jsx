import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import '../App.css';
import { Clock } from './Clock';

function PageOne({ centerBox, setCenterBox }) {
  const [position, setPosition] = useState();
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [center, setPositionCenter] = useState(true);
  const [showDrag, setShowDrag] = useState(true);

  useEffect(() => {
    setPosition(centerBox ? 'center' : null);
  }, []);

  const dragRelease = (event, data) => {
    console.log(data);
    setCenterBox(false);
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
    setCenterBox(false);
    setPositionX(0);
    setPositionY(0);
    setPosition(e.target.value);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowDrag(false);
      }
      if (event.keyCode === 13) {
        setShowDrag(true);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const isSelected = (value) => position === value;

  return (
    <div className="container">
      <header className="AppHeader">
        <div className="headerItem">
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
        <div className="headerItem">
          <p className="util">
            Press ESC key to hide the Window, Enter to show it again
          </p>
          <Clock />
        </div>
      </header>
      <main className="AppBody">
        <div
          // className="mainBody"
          className={`mainBody ${center ? 'makeItCenter' : ''}`}
        >
          {showDrag && (
            <Draggable
              onStop={dragRelease}
              axis="both"
              position={{ x: positionX, y: positionY }}
            >
              <div
                className="dragContainer"
                style={{
                  position: position || centerBox ? 'absolute' : '',
                  top:
                    position === 'center' || centerBox
                      ? 'calc(50% - 70px)'
                      : '',
                  bottom: position === 'lowerRight' ? '70px' : '',
                  right: position === 'lowerRight' ? '0' : '',
                  transform: '',
                }}
              />
            </Draggable>
          )}
        </div>
      </main>
      <footer className="AppFooter">
        <Link to="/pagetwo" style={{ textDecoration: 'none' }}>
          <p style={{ color: 'white' }}>Go to Page 2</p>
        </Link>
      </footer>
    </div>
  );
}

export default PageOne;

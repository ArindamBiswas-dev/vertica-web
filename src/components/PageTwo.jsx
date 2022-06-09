import { useNavigate } from 'react-router-dom';
import '../App.css';

function PageTwo({ setCenterBox }) {
  const navigate = useNavigate();

  const goBack = () => {
    setCenterBox(true);
    navigate('/');
  };

  return (
    <div className="pageTwoContainer">
      <header className="pageTwoHeader">Page 2</header>
      <main className="pageTwoBody">
        <img
          src="https://www.apple.com/newsroom/images/live-action/wwdc-2022/Apple-WWDC22-M2-chip-hero-220606_big.jpg.large.jpg"
          alt="m2_chip"
          height="200"
          width="350"
          className="image"
        />
        <h1 className="heading">Apple M2 Chip</h1>
        <p className="detail">
          Apple unveils M2, taking the breakthrough performance and capabilities
          of M1 even further. M2 delivers new levels of power-efficient
          performance and capabilities to the completely redesigned MacBook Air
          and updated 13-inch MacBook Pro. Apple today announced M2, beginning
          the next generation of Apple silicon designed specifically for the
          Mac. Built using second-generation 5-nanometer technology, M2 takes
          the industry-leading performance per watt of M1 even further with an
          18 percent faster CPU, a 35 percent more powerful GPU, and a 40
          percent faster Neural Engine.1 It also delivers 50 percent more memory
          bandwidth compared to M1, and up to 24GB of fast unified memory. M2
          brings all of this — plus new custom technologies and greater
          efficiency — to the completely redesigned MacBook Air and updated
          13-inch MacBook Pro.
        </p>
      </main>

      <button className="backBtn" onClick={goBack}>
        {'<'} Back
      </button>
    </div>
  );
}

export default PageTwo;

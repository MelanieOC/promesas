import React from 'react';
import './App.css';
import { connect } from 'redux-zero/react';
import { Image } from 'react-bootstrap';

const Planet = ({ planet }) => {
  return (
    <div className='planet'>
      <Image src={planet.pl_img} responsive />
      <h3>{planet.pl_name}</h3>
      <h4>Description</h4>
      <ul>
      <li><strong>Radio: </strong>{planet.ra}</li>
      <li>Discovered in {planet.pl_disc} with {planet.pl_telescope}</li>
      </ul>
      <a href={planet.pl_edelink}>More Details</a>
    </div>
  )
}
const App = ({ planets }) => {
  return (
    <div>
      <header className="App-header">
        <h1>Exoplanet Explorer</h1>
        <h3>Learn more about planets around other stars!</h3>
      </header>
      <div className='planets-content'>
        {planets.map(a => <Planet planet={a} />)}
      </div>
    </div>
  );
}

const mapToProps = ({ planets }) => ({ planets });
export default connect(mapToProps)(App);

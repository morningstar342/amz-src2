/* eslint-disable @next/next/no-img-element */


/* Link an Image */
import cbLogo from './cb-logo.png';

async function App() {
    return (
    <div>
        Click the logo to navigate to the site
        <br />
        <br />
        <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
            <img src={cbLogo} alt="Coding Beauty logo"></img>
        </a>
    </div>
    );
}


import { Link } from 'react-router-dom';

async  function ImagesPage() {
    return (
    <div>
        <Link to="/nature" target="_blank" rel="noreferrer">
            <img src="/photos/tree-1.png" alt="Nature"></img>
        </Link>
    </div>
    );
}

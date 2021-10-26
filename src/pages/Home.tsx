import React from 'react';
import { StyledHome } from './styles/home';
import Particle from '../components/Particle';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <div className="bg-particles">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Tristan Lin</span>
          <p>
            I am Tristan Lin, a software engineer focused and passionate in
            frontend web development. <br />
            Loves coding, basketball, music and cats. You should find all you
            want to know about me in this website ~ Feel free to contact me as
            well !
          </p>
          <div className="icons">
            <a
              className="icon i-facebook"
              href="https://www.facebook.com/profile.php?id=100008932784077"
            >
              <FacebookIcon />
            </a>
            <a className="icon i-github" href="https://github.com/cclintris">
              <GithubIcon />
            </a>
            <a
              className="icon i-instagram"
              href="https://www.instagram.com/tristancclin/"
            >
              <InstagramIcon />
            </a>
          </div>
        </h1>
      </div>
    </StyledHome>
  );
};

export default Home;

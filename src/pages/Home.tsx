import React from 'react';
import { StyledHome } from './styles/home';
import Particle from '../components/Particle';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { FACEBOOK_LINK, GITHUB_LINK, INSTAGRAM_LINK } from '../constants';

const Home: React.FC = (): JSX.Element => {
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
            <a className="icon i-facebook" href={FACEBOOK_LINK}>
              <FacebookIcon />
            </a>
            <a className="icon i-github" href={GITHUB_LINK}>
              <GithubIcon />
            </a>
            <a className="icon i-instagram" href={INSTAGRAM_LINK}>
              <InstagramIcon />
            </a>
          </div>
        </h1>
      </div>
    </StyledHome>
  );
};

export default Home;

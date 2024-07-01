import './Home.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import About from '../about/About';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';

const Home = () => {
  const navigate = useNavigate();
  const resumeUrl='./VidhyaSreeCh.pdf'
  const [text] = useTypewriter({
    words: ['FrontEnd Developer'],
    loop: {}
  });

  const hireHandle = () => {
    navigate('/contact');
  };

  return (
    <div>
    <div className='home-container'>
      <h1>
        Hello I'm Vidhya Sree<br />
        <span style={{ fontWeight: 'bold', color: 'green' }}>
          {text}
        </span>
        <Cursor />
      </h1>
      <div className='buttons'>
        <button type='button' onClick={hireHandle}>Hire Me</button>
        <button><a
          href={resumeUrl}
          download='VidhyaSree_Resume.pdf'
          className='resume-download-button'
        >
          Download Resume
        </a></button>
      </div>
      </div>
      <About />
      <Skills />
      <Contact />
    </div>
   
  );
};

export default Home;

import React , { useState, useEffect }  from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client';

import './AboutMe.scss'

const AboutMe = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);


  

  
  return (
  <div id="AboutMe " >
                 
    <h2 className='head-text'>About<span>Me</span></h2>
    <p className='p-text2'>Una piccola panaromica su di me</p>

    <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 , type: "spring", stiffness: 100, damping: 15}}
          whileHover={{ scale: 1.1 }}

          >
    <div className='AboutMe__container '>
    

              
        <img src={images.profile3} className='AboutMe__img' alt='Me'/>
    
    
        <div className='AboutMe__data'>

        <div className='AboutMe__description'>
        Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out. 
        </div>
       
        <a  download="Curriculum" href={images.CV} className="button">Download</a>
        </div>
        
    </div>
    </motion.div>
    

    <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>


  </div>   

  )
}

export default AppWrap(AboutMe,'about')
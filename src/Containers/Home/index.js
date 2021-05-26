import React from 'react';
import {FaRegAddressCard, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import {BsFillPlusCircleFill} from 'react-icons/bs';

import Navbar from '../../Components/Icon/Navbar';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <main className={styles.container}>
      <header>
        <FaRegAddressCard className={styles.logo} />
        <a href="https://forms.gle/5KDeKCkUyuhKibNX9" rel="noreferrer" target="_blank" className={styles.joinBanner}>
          <BsFillPlusCircleFill />
          <h5>Join Us</h5>
        </a>
      </header>
      <h2 className={styles.title}>Nepal Responds</h2>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, neque hendrerit dignissim eget vel quam. Aenean mi quam, pharetra at leo a, eleifend blandit metus. Quisque a luctus lacus, non fringilla mi. Quisque porta eros lectus, a eleifend justo pulvinar nec. Proin ullamcorper sit amet arcu sit amet scelerisque.</p>
      <h2 className={styles.question}>What are you looking for ? </h2>
      <Navbar />
      <hr />
      <div className={styles.socialLinks}>
        <FaLinkedin className={styles.lnIcon} />
        <FaFacebookSquare className={styles.fbIcon} />
        <FaTwitterSquare className={styles.twIcon} />
      </div>
    </main>
  )
}

export default Home;

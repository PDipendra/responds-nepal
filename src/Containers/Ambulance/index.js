import React from 'react';
import Navbar from '../../Components/Icon/Navbar';
import Topbar from '../../Components/Topbar';

import ambulance from '../../data/ambulance.json';

import styles from './styles.module.scss';

const Ambulance = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className={styles.resultWrapper}>
          {ambulance.map((item) => 
              <div className={styles.resultCard} key={item.sn}>
                <div className={styles.cardContent}>
                  <div>{item.name}</div>
                  <div><span>{item.telephone}</span></div>
                </div>
              </div>
          )}
      </div> 
    </div> 
  )
}

export default Ambulance;

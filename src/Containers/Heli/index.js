import React from 'react';
import Navbar from '../../Components/Icon/Navbar';
import Topbar from '../../Components/Topbar';

import heli from '../../data/heli.json';

import styles from './styles.module.scss';

const Heli = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className={styles.resultWrapper}>
        {heli.map((item) => 
          <div className={styles.resultCard} key={item.sn}>
            <div className={styles.cardHeader}>
              <h4>{item.airlines}</h4>
              <h5>{item.address}</h5>
            </div>
            <div className={styles.cardContent}>
              <div>
                <span>{item.name}</span>
                <span>{item.status}</span>
              </div>
              <div>Landline :<span>{item.tel}</span></div>
              <div>Mobile No. :<span>{item.cell}</span></div>
              <div>Email : <span>{item.email}</span></div>
            </div>
          </div>
        )}
      </div>  
    </div>
  )
}

export default Heli;

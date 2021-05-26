import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaRegHospital, FaAmbulance} from 'react-icons/fa';
import {BsBuilding, BsFillDropletFill} from 'react-icons/bs';

import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <NavLink to="/hospital" className={styles.contentCard} activeStyle={{border : '4px solid #c5f4cc'}}>
            <FaRegHospital />
            <h5>Hospitals</h5>
        </NavLink>
        <NavLink to="/heli" className={styles.contentCard} activeStyle={{border : '4px solid #c5f4cc'}}>
            <BsBuilding />
            <h5>Heli Services</h5>
        </NavLink>
        <NavLink to="/ambulance" className={styles.contentCard} activeStyle={{border : '4px solid #c5f4cc'}}>
            <FaAmbulance />
            <h5>Ambulance</h5>
        </NavLink>
        <NavLink to="/oxygen" className={styles.contentCard} activeStyle={{border : '4px solid #c5f4cc'}}>
            <BsBuilding />
            <h5>Oxygen Supplies</h5>
        </NavLink>
        <NavLink to="/blood" className={styles.contentCard} activeStyle={{border : '4px solid #c5f4cc'}}>
            <BsFillDropletFill />
            <h5>Blood/Plasma</h5>
        </NavLink>
    </div>
  )
}

export default Navbar;

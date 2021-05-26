import React, { useCallback, useState } from 'react';

import Navbar from '../../Components/Icon/Navbar';
import Topbar from '../../Components/Topbar';
import hospital from '../../data/hospital.json';

import styles from './styles.module.scss';

const Hospital = () => {
    const [state, setState] = useState('1');
    const [district, setDistrict] = useState();

    const filteredDistrict = hospital.filter(item => item['province '] === state);
    const filteredHospital = district ? 
                                hospital.filter(item => item.district === district)
                                : hospital.filter(item => item['province '] === state);

    const onChangeState = useCallback(event => {
        setState(event.target.value);
        setDistrict();
    }, []);
    const onChangeDistrict = useCallback(event => setDistrict(event.target.value), []);

    return (
        <div>
            <Topbar />
            <Navbar />
            <div className={styles.filterBar}>
                <h4>Available Hospital List</h4>
                <div>
                    <label>
                        Select State
                        <select className={styles.select} value={state} onChange={onChangeState}>
                            <option value="1">State 1</option>
                            <option value="2">State 2</option>
                            <option value="3">Bagmati</option>
                            <option value="4">Gandaki</option>
                            <option value="5">Lumbini</option>
                            <option value="6">Karnali</option>
                            <option value="7">Sudurpaschim</option>
                        </select>
                    </label>
                    <label>
                        Select district
                        <select className={styles.select} value={district} onChange={onChangeDistrict}>
                            {Array.from(new Set(filteredDistrict.map((j) => j.district))).map((district) => (
                                <option value={`${district}`}>{district}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
            <div className={styles.resultWrapper}>
                {filteredHospital.map((item) => 
                    <div className={styles.resultCard} key={item.sn}>
                        <div className={styles.cardHeader}>
                            <h4>{item.hospital_name}</h4>
                            <h5>{item.address}</h5>
                        </div>
                        <div className={styles.cardContent}>
                            <div>Total Beds :<span>{item.total_beds}</span></div>
                            <div>Icu Beds :<span>{item.total_beds}</span></div>
                            <div>Ventilators :<span>{item.total_beds}</span></div>
                            <div>Isolation Beds :<span>{item.total_beds}</span></div>
                        </div>
                    </div>
                )}
            </div>  
        </div>
    )
}

export default Hospital;

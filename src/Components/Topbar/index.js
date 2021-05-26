import React from 'react';
import {FaRegAddressCard} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import styles from './styles.module.scss';

const Topbar = () => {
    return (
        <section className={styles.container}>
            <Link to="/">
            <FaRegAddressCard className={styles.logo} />
            </Link>
            <h3>Nepal Responds</h3>
        </section>
    )
}

export default Topbar;

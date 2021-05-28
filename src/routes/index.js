import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Containers/Home';
import Hospital from '../Containers/Hospital';
import Oxygen from '../Containers/Oxygen';
import Ambulance from '../Containers/Ambulance';
import Blood from '../Containers/Blood';
import Heli from '../Containers/Heli';

import styles from './styles.module.scss';

const Routes = () => {
  return (
    <div className={styles.container}>
      ldlvnkvbdfbvdfkbdkf
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/heli" component={Heli} />
        <Route exact path="/ambulance" component={Ambulance} />
        <Route exact path="/oxygen" component={Oxygen} />
        <Route exact path="/blood" component={Blood} />
      </Switch>
    </div>
  )
}

export default Routes;

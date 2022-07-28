import React from 'react';

import styles from './App.module.css';
import './global.css';

export function App(){
  return(
    <div>

      <header className={styles.header}>
        <img src="./assets/rocket.svg" alt="Logo" />
        <h1>todo</h1>
      </header>

      

    </div>
  );
}
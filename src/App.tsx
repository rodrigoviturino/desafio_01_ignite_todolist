import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';

import './global.css';
import styles from './App.module.css';

import { Lista } from './components/Lista';
import { Notificacao } from './components/Notificacao';

export function App(){

  return(
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.wrapper}>

          <Lista />

        </div>
      </main>

    </div>
      
  );
}
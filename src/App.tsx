import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';

import styles from './App.module.css';
import './global.css';

import { Lista } from './components/Lista';

export function App(){
  return(
    <div>

      <Header />

      <main className={styles.main}>

        {/* Campo do Input */}
        <Form />

        {/* Lista */}
        <Lista />


      </main>
      

    </div>
  );
}
import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';

import './global.css';
import styles from './App.module.css';

import { Lista } from './components/Lista';
import { Notificacao } from './components/Notificacao';

export function App(){

  // const tarefas = [
  //   {
  //     id: 1,
  //     content: 'Comprar Smartphone',
  //     status: true
  //   },
  //   {
  //     id: 2,
  //     content: 'Fazer Caminhada',
  //     status: false
  //   }
  // ];

  return(
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.wrapper}>

          {/* {
            tarefas.map((item) => {
              return(
                <Lista
                  key={item.id}
                  content={item.content}
                  status={item.status}
                />
                )
              })
          } */}
          <Lista />


        </div>
      </main>

    </div>
      
  );
}
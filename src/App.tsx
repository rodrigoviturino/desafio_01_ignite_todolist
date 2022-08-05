import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';

import styles from './App.module.css';
import './global.css';

import { Lista } from './components/Lista';
import { Notificacao } from './components/Notificacao';

export function App(){

  const tarefas = [
    {
      id: 1,
      content: 'Comprar Smartphone',
      status: true
    },
    {
      id: 2,
      content: 'Fazer Caminhada',
      status: false
    },
    {
      id: 3,
      content: 'Comprar ingresso para ir ao Morumbi',
      status: true
    },
  ]

  return(
    <div>

      <Header />

      <main className={styles.main}>

        <div className={styles.wrapper}>

          <Form />

          <Notificacao />

          {
            tarefas.map((item) => {
              return(
                <Lista
                  key={item.id}
                  content={item.content}
                  status={item.status}
                />
                )
              })
          }

        </div>

      </main>
      
    </div>
  );
}
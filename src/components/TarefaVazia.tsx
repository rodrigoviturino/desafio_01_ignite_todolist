import React from 'react';

import clipBoard from '../assets/clipboard.svg';

import styles from './TarefaVazia.module.css';

export const TarefaVazia = () => {
  return (
    <li className={styles.clipboard}>
      <img src={clipBoard} alt="Não tem tarefas cadastradas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </li>
  )
}

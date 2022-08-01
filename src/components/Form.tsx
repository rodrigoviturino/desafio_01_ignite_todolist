import React from 'react';

import styles from './Form.module.css';

export const Form = () => {
  return (
    <form action="#" className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type="submit">Criar +</button>
    </form>
  )
}

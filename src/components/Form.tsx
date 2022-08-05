import React from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './Form.module.css';

export function Form(){
  return (
    <form action="#" method="post" className={styles.form}>
      <input type="text" id="tarefa" name="tarefa" placeholder='Adicione uma nova tarefa'/>
      <button type="submit">Criar <PlusCircle size={20} /></button>
    </form>
  )
}

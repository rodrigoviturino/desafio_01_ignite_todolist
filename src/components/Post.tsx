import React from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './Form.module.css';

import styles1 from './Lista.module.css';

import { Trash, Circle, CheckCircle } from 'phosphor-react';
import clipBoard from '../assets/clipboard.svg';
import { Lista } from './Lista';

export const Post = ({ id, content, status }) => {
  return (
    <section>

      <form action="#" method="post" className={styles.form}>
        <input type="text" id="tarefa" name="tarefa" placeholder='Adicione uma nova tarefa'/>
        <button type="submit">Criar <PlusCircle size={20} /></button>
      </form>

      <Lista
        content={content}
      />

    </section>
  )
}

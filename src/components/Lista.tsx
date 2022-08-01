import React from 'react';

import styles from './Lista.module.css';

import { Trash, Circle, CheckCircle } from 'phosphor-react';
import clipBoard from '../assets/clipboard.svg';

export const Lista = () => {
  return (
        <div className={styles.tarefas}>

          <div className={styles.notificacao}>
            <p>Tarefa Criadas <span>0</span></p>
            <p>Concluídas <span>2 de 5</span></p>       
          </div>

          <ul className={styles.lista}>

          {/* Lista vázia */}
            <li className={styles.clipboard}>
              <img src={clipBoard} alt="Não tem tarefas cadastradas" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </li>

          {/* Lista com Item */}
            {/* <li className={styles.item}>
              <Circle size={20} />
              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
              <span><Trash size={20} /></span>
            </li>

       
            <li className={styles.item}>
              <CheckCircle size={20} className={styles.checkCircle} />
              <s>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</s>
              <span><Trash size={20} /></span>
            </li> */}

          </ul>

        </div>
  )
}

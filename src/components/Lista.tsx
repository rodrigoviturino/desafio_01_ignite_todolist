import React from 'react';

import styles from './Lista.module.css';

import { Trash, Circle, CheckCircle } from 'phosphor-react';
import clipBoard from '../assets/clipboard.svg';


interface ListaProps {
  content: string;
  status: boolean;
}

export const Lista = ( props: ListaProps ) => {

  function handleFinished(event){
    console.log(event.target)
  }

  return (
    <div className={styles.tarefas}>

      <ul className={styles.lista}>

      {/* Lista vázia */}
        {/* <li className={styles.clipboard}>
          <img src={clipBoard} alt="Não tem tarefas cadastradas" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </li> */}

      {/* Lista com Item */}
        <li
          className={styles.item}
          onClick={handleFinished}
        >
          <Circle size={20}/>
          <p>{props.content}</p>
          <span><Trash size={20} /></span>
        </li>

    
        {/* <li className={styles.item}>
          <CheckCircle size={20} className={styles.checkCircle} />
          <s></s>
          <span><Trash size={20} /></span>
        </li> */}

      </ul>

    </div>
  )
}

import React, {ChangeEvent, FormEvent } from 'react';

import { Trash, Circle, CheckCircle } from 'phosphor-react';

import clipBoard from '../assets/clipboard.svg';

import styles from './Tarefas.module.css';

interface ListaProps {
  id: number;
  content: string;
  status: boolean;
  onDeleteTask: (task: number) => void;
  onDoneTask: (id: number) => void;
}

export const Tarefas = ({id, content, status, onDeleteTask, onDoneTask}: ListaProps) => {

  // function handleFinished(event){
  //   console.log(event.target)
  // }

  function handleDeleteTask(){
    onDeleteTask(id);
  }

  function handleDoneTask(){
    onDoneTask(id);
  }

  return (
    <>

    {/* Lista vázia */}
      {/* <li className={styles.clipboard}>
        <img src={clipBoard} alt="Não tem tarefas cadastradas" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </li> */}

    {/* Lista com Item */}        

          <li
          className={status ? styles.checkCircle : styles.item}
          >
            <button onClick={handleDoneTask} className={styles.checkedIcon}>
              { status ? <CheckCircle className={styles.checked} size={25}/> : <Circle size={25} />}
            </button>
            { status ? <s>{content}</s> : <p>{content}</p> }
            <button onClick={handleDeleteTask} className={styles.trash}><Trash size={25} /></button>
          </li>
      
  
      {/* <li className={styles.item}>
        <CheckCircle size={20} className={styles.checkCircle} />
        <s></s>
        <span><Trash size={20} /></span>
      </li> */}

  </>
  )
}

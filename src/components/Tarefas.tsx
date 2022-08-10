import React, {ChangeEvent, FormEvent } from 'react';

import styles from './Lista.module.css';

import { Trash, Circle, CheckCircle } from 'phosphor-react';

interface ListaProps {
  id: number;
  content: string;
  status: boolean;
  onDeleteTask: (task: string) => void;
}

export const Tarefas = ({id, content, status, onDeleteTask}: ListaProps) => {

  // function handleFinished(event){
  //   console.log(event.target)
  // }

  function handleDeleteTask(){
    onDeleteTask(id);
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
        className={styles.item}
      >
        <Circle size={20}/>
        <p>{content}</p>
        <button onClick={handleDeleteTask}><Trash size={20} /></button>
      </li>

  
      {/* <li className={styles.item}>
        <CheckCircle size={20} className={styles.checkCircle} />
        <s></s>
        <span><Trash size={20} /></span>
      </li> */}

  </>
  )
}

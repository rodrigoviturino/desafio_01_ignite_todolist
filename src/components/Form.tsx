import React, { ChangeEvent, FormEvent, InputEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './Form.module.css';

export function Form(){

  // Lista de Tarefas
  const [ tasks, setTasks ] = React.useState([
    'Estudar JS',
    'Comprar Ingresso São Paulo FC',
    'Fazer Caminhada'
  ]);

  // Valor do input de tarefa
  const [newTask, setNewTask] = React.useState('');

  function handleCreateTask(event: FormEvent){
    event.preventDefault();

    setTasks([...tasks, newTask]);

  }

  function handleNewTaskChange(event: InputEvent<HTMLInputElement>){
    // event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }


  return (
    <form onSubmit={handleCreateTask} className={styles.form}>

      <input
        name="tarefa"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
      />

      <button type="submit">Criar <PlusCircle size={20} /></button>

    </form>
  )
}

import React, { ChangeEvent, FormEvent } from 'react';
import { List, PlusCircle } from 'phosphor-react';

import styles from './Form.module.css';

export function Form(){

  // Lista de Tarefas
  const [ tasks, setTasks ] = React.useState([
    'Comprar Ingresso São Paulo FC'
  ]);

  // Valor do input de tarefa
  const [newTask, setNewTask] = React.useState('');

  function handleCreateTask(event: FormEvent){
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleNewTaskChange(event){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  return (
    <section>

      <form onSubmit={handleCreateTask} className={styles.form}>

        <input
          name="tarefa"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
        />

        <button type="submit">Criar <PlusCircle size={20} /></button>

      </form>

      <div className={styles.tarefas}>
        <ul className={styles.lista}>
          {tasks.map((task) => {
            return(
              <List
                key={task}
                content={task}
                status={task}
              />
            )
          })}
        </ul>

      </div>

    </section>
  )
}

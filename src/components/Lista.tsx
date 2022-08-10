import React, {ChangeEvent, FormEvent } from 'react';

import styles from './Lista.module.css';

import { Trash, Circle, CheckCircle, PlusCircle } from 'phosphor-react';

import clipBoard from '../assets/clipboard.svg';
import { Tarefas } from './Tarefas';

interface ListaProps {
  content: string;
  status: boolean;
}

export const Lista = ( props: ListaProps ) => {

  // Lista de Tarefas
  const [ tasks, setTasks ] = React.useState([
    'Comprar Ingresso São Paulo FC'
  ]);

  // Guardando Valor do input no ESTADO
  const [newTask, setNewTask] = React.useState('');

  // Com o valor do input, vamos jogar na lista
  function handleCreateTask(event: FormEvent){
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  // Capturando valor do input e setando no estado
  function handleNewTaskChange(event){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  return (
  <section>

    {/* Formulário */}
    <form onSubmit={handleCreateTask} className={styles.form}>

      <input
        name="tarefa"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        />

      <button type="submit">Criar <PlusCircle size={20} /></button>

    </form>
    {/* end Formulário */}

    {/* Lista de Tarefas */}
    <div className={styles.tarefas}>

      <ul className={styles.lista}>
        {
          tasks.map((task) => {
            return(
              <Tarefas
                key={task}
                content={task}
                status={task}
              />
            )
          })
        }
      </ul>

    </div>
    {/* end Lista de Tarefas */}

  </section>
  )
}

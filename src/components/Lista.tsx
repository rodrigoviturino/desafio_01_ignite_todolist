import React, {ChangeEvent, FormEvent } from 'react';


import { Trash, Circle, CheckCircle, PlusCircle } from 'phosphor-react';

import clipBoard from '../assets/clipboard.svg';
import { Tarefas } from './Tarefas';

import styles from './Lista.module.css';
import styles1 from './Notificacao.module.css';
import { TarefaVazia } from './TarefaVazia';

interface Tasks {
  id: number;
  content: string;
  status: boolean;
}

export const Lista = () => {

  // Lista de Tarefas
  const [ tasks, setTasks ] = React.useState<Tasks[]>([]);

  // Guardando Valor do input no ESTADO
  const [newTask, setNewTask] = React.useState('');

  // Com o valor do input, vamos jogar na lista
  function handleCreateTask(event: FormEvent){
    event.preventDefault();

    setTasks([...tasks,
      {
        id: new Date().getTime(),
        content: newTask,
        status: false
      }
    ]);
    setNewTask('');
  }

  // Capturando valor do input e setando no estado
  function handleNewTaskChange(event){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function deleteTask(id: number){
    const deleteTask = tasks.filter((task) => {
       return task.id !== id;
    })

    setTasks(deleteTask)    
  }

  function handleDoneTask(id: number){
    const taskIndex = tasks.findIndex(task => task.id === id);
    let newTaskArray = [...tasks];
    
    newTaskArray[taskIndex].status = !newTaskArray[taskIndex].status;

    setTasks(newTaskArray);    
  }

  const tasksCompleta = tasks.filter(task => {
    return task.status !== false
  })

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

      <div className={styles1.notificacao}>
        <p>Tarefa Criadas <span>{tasks.length}</span></p>
        <p>Concluídas <span> { tasksCompleta.length } de {tasks.length} </span> </p>
      </div>


      <ul className={styles.lista}>
        {
          tasks.map((task) => {
            return(
                <Tarefas
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  status={task.status}
                  onDeleteTask={deleteTask}
                  onDoneTask={handleDoneTask}
                />
              )
          })
        
        }
      </ul>
        {
          tasks.length === 0 &&
            <TarefaVazia />
        }

    </div>
    {/* end Lista de Tarefas */}

  </section>
  )
}

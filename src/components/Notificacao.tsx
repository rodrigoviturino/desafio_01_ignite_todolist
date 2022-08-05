import React from 'react';

import styles from './Notificacao.module.css';

export const Notificacao = () => {
  return (
    <div className={styles.notificacao}>
      <p>Tarefa Criadas <span>0</span></p>
      <p>Concluídas <span>2 de 5</span></p>       
    </div>
  )
}

import styles from './Header.module.css';

import logoRocket from '../assets/rocket.svg';

export function Header(){

  return(
    <header className={styles.header}>
      <img src={logoRocket} alt="Logo" />
      <h1>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </h1>
    </header>
  )
};
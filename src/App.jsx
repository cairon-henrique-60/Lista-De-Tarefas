import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { NoTasks } from '../components/NoTasks';
import { Tasks } from '../components/Tasks';

import styles from './App.module.css'
import './global.css';

export function App() {
  return (
   <div>
      <div className={ styles.clasHeader }>
        <Header />
      </div>
      <div className={ styles.form }>
        <Form />
      </div>
   </div>
  )
}


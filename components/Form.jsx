import  { Flag, PlusCircle } from 'phosphor-react'

import { Tasks } from './Tasks'
import { NoTasks } from './NoTasks'

import styles from './Form.module.css'
import { useState } from 'react'

export function Form() {
    function returnComponent() {

        if(tasks.length === 0) {
            return <NoTasks />
        } else {
           return tasks.map(tasksList => {
            return (
                <Tasks 
                    key={tasksList}
                    tasks={tasksList}
                    onDeleteComment={onDeleteComment}
                    executedTaskCounter={executedTaskCounter}
                />
            )
        })}
    }

    const [tasks, setTasks] = useState([
    ])
   
    const [newTasks, setNewtasks] = useState('')

    const amountTasks = tasks.length;
    
    function handleCreateNewTask() {
        event.preventDefault();
    
        setTasks([...tasks, newTasks])
        setNewtasks('');
    }

    //Função para capturar o valor da textarea
    function handleCreateNewTaskChange() {
        setNewtasks(event.target.value)
    }

    function onDeleteComment(tasksToDelete) {
        const tasksWithoutDeleteOne = tasks.filter(tasks => {
            return tasks !== tasksToDelete;
        })

        setTasks(tasksWithoutDeleteOne)

        const valueTasksWithoutDeleteOne = tasksWithoutDeleteOne.length

        // Condicional para limitar a quantidade de tarefas prontas

        if(cont > valueTasksWithoutDeleteOne) {
            setCont(valueTasksWithoutDeleteOne)
        }
    }
    
    const [cont, setCont] = useState(0)
    
    function executedTaskCounter(executedTask = false) {
        let count = cont; 
            count = !executedTask ? count + 1 : count - 1

            setCont(count)
    }

    return (
        <div>
            <form  onSubmit={handleCreateNewTask}>
                <textarea 
                    placeholder="Adicione uma nova tarefa"
                    required
                    name='task'
                    className={styles.taskText}
                    value={newTasks}
                    onChange={handleCreateNewTaskChange}
                />
                <button>Criar <PlusCircle size={18}/> </button>
            </form>
            
            <div className={styles.areaWithouTasks}>
                <p className={styles.addTask}>
                    Tarefas criadas <span>{amountTasks}</span>
                </p>
                <p  className={styles.taskCompleted}>
                    Concluídas 
                    <span>{cont} de {amountTasks} </span>
                   
                </p>
            </div> 
            <div className={styles.infoTasks}>
               {returnComponent()}
            </div>

        </div>
    )
}

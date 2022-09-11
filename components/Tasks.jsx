import { ClipboardText, Trash } from "phosphor-react";
import { useState } from "react";
import { Form } from "./Form";

import styles from './Tasks.module.css'

export function Tasks({ tasks, onDeleteComment, executedTaskCounter }) {

   const [check, setCheck] = useState(false);
    function hendleFinalyTasks() {
        setCheck(!check)
    }

    function handleDeleteTask() {
        onDeleteComment(tasks)
    }

    // Contador de tarefas executas
    function onExecutedTaskCounter() {
        executedTaskCounter(check)
    }

    return (
        <div>        
            <form className={styles.tasksCreated}>
                <input    
                    onClick={hendleFinalyTasks}
                    onChange={onExecutedTaskCounter}
                    type="checkbox" 
                    name="checkName"
                />
                <p 
                    className={check === false ? styles.tasksNotPerformed : styles.tasksPerformed }>{tasks}
                </p>
                <a onClick={handleDeleteTask} href="#"><Trash /></a>
            </form>
        </div>
    )
}
 
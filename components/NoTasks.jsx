import  { Clipboard } from 'phosphor-react'

import styles from './NoTasks.module.css'

export function NoTasks() {
    return (
        <div>
           
            <div className={ styles.articleArea }>
               <p className={ styles.clip }>
                    <Clipboard/>
               </p>
               <article>
                    <p>
                        Você ainda não tem tarefas cadastradas <br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
               </article>
            </div>
       
    </div>
    )
}
//<ClipboardText/>
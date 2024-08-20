import { useState } from 'react';
import { Task } from '../task';
import { ContainEmpty } from '../containEmpty';

import style from './main.module.css';


export function Main () {

    
    const [ tasks, setTasks ] = useState('') 
    function newTasksChange ( event ) {
        setTasks(event.target.value)
    };
    

    
    const [ tasksList, setTaskslist ] = useState([])
    function createNewTasks () {
        
        if(tasks.length === 0) {
            alert('É necessário adicionar uma tarefa')
        } else {
            const newTasks = {
                id: new Date().getTime(),
                title: tasks,
                isComplete: false
            }

            setTaskslist([...tasksList, newTasks])

            setTasks('')
        }    
    };



    function updateChecked( newValueChecked, id ) {

        const updateTaskList = tasksList.map( (task) => {
            if( id === task.id) {
                return {...task, isComplete: newValueChecked}
            }

            return { ...task }
        })

        setTaskslist(updateTaskList)
    }



    function removeTask( id ){

        const newTasksList = tasksList.filter( (tasks) => tasks.id !== id );

        if(!confirm('Deseja mesmo apagar esta tarefa?')){
            return
        }

        setTaskslist(newTasksList);
    }


    const checkedTasksCount = tasksList.reduce( (accumulator, task ) => {
        if( task.isComplete === true) {
           return accumulator + 1
        }

        return accumulator
    }, 0)



    return (
        <div className={style.main}>

            <div className={style.containerInput}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa' 
                    onChange={newTasksChange} 
                    value={tasks} 
                />

                <button onClick={createNewTasks}>Criar<img src="src\assets\plus.svg" /></button>
            </div>

            <div className={style.containerTasks}>

                <div className={style.headerTasks}>
                    <div className={style.newTasks}>
                        <p>Tarefas Criadas</p>
                        <span>{tasksList.length}</span>
                    </div>

                    <div className={style.completedTasks}>
                        <p>Concluídas</p>
                        <span>
                            {
                                checkedTasksCount === 0 ? 0 : `${checkedTasksCount} de ${tasksList.length}`
                            }
                        </span>
                    </div>
                </div>
                
                <div className={style.containTasks}>
                    {
                        (tasksList.length === 0) ? (<ContainEmpty/>) : 
                        (
                            tasksList.map((task, index) => {
                            
                                return (
                                    <Task 
                                        //key não pode ser passada como props para outro componente, por ser uma propriedade especial usada internamente pelo React//
                                        key={ task.id }
                                        //passando o index em uma props separada//
                                        taskIndex={ index }
                                        data = { task } 
                                        removeTask={ removeTask }
                                        updateChecked = { updateChecked }
                                    />
                                )  
                            })         
                        ) 
                    }
                </div>
            </div>
        </div>
    )
};
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";


import style from './task.module.css'



export function Task ({ data, removeTask, updateChecked }) {



    const [checkedButton, setCheckedButton] = useState(false);
    function handleCheckedTask( ){
        setCheckedButton( !checkedButton )
    
        const newValueChecked = !data.isComplete

        updateChecked(newValueChecked, data.id)
    };



    function handleRemoveTask() {
        removeTask(data.id)
    };



    return (

        <div className={style.task} key={data.id}>
            
            <button onClick={handleCheckedTask} className={checkedButton ? style.checkedButton : style.uncheckedButton}>
                    <FaCheck 
                        size={12} 
                        className={ checkedButton ? style.checked : style.unchecked}
                    />
            </button>

            <p className={ checkedButton ? style.taskItalic : style.taskNotItalic}> 
                {data.title}
            </p>

            <button className={style.buttonTrash} onClick={handleRemoveTask}>
                <FaRegTrashAlt 
                    size={15}
                    className={style.trash}
                />
            </button>

        </div>

    )

};

 

import style from './containEmpty.module.css';

export function ContainEmpty (){
    return(
        <div className={style.containEmpty}>
            <img src="src\assets\logo-empty.svg"/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br/>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
};
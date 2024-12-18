import Item from './item/index'
import style from './list.module.scss';
import {ITask} from "../../types/ITask";

export interface Props {
    tasks: ITask[];
    selectTask: (selectTask: ITask) => void;
}

export default function List({tasks, selectTask}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Daily Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    );
}
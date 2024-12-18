import style from "./item.module.scss";
import {ITask} from "../../../types/ITask";

export interface Props extends ITask {
    selectTask: (selectTask: ITask) => void;
}

export default function Item({name, time, selected, done, id, selectTask}: Props) {
    return (
        <li className={`${style.item} ${selected? style.itemSelecionado : ''} ${done? style.itemCompletado : ''}`}
            onClick={() => !done && selectTask({name, time, selected, done, id})}>
            <h3>{name}</h3>
            <span>{time}</span>
            {done && <span className={style.concluido} aria-label="task as done"></span>}
        </li>
    )
}
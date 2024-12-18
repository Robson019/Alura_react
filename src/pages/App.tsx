import {useState} from 'react';
import Form from '../components/form';
import List from "../components/list";
import Chronometer from "../components/chronometer";
import style from './App.module.scss';
import {ITask} from "../types/ITask";

export default function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [select, setSelect] = useState<ITask>();

    function selectTask(task: ITask) {
        setSelect(task);
        setTasks(tasks.map(t => ({...t, selected: t.id === task.id})))
    }

    function finishTask() {
        if (select) {
            setSelect(undefined);
            setTasks(tasks.map(t => {
                if (t.id === select.id) {
                    return {...t, selected: false, done: true}
                }
                return t;
            }))
        }
    }

  return (
    <div className={style.AppStyle}>
        <Form setTasks={setTasks} />
        <List tasks={tasks} selectTask={selectTask}  />
        <Chronometer selected={select} finishTask={finishTask} />
    </div>
  );
}

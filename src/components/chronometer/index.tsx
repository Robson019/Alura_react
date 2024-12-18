import Button from "../button";
import Clock from "./clock";
import style from './chronometer.module.scss';
import {ITask} from "../../types/ITask";
import {useEffect, useState} from "react";
import {formatTimeToSeconds} from "../../common/utils/time";

export default function Chronometer({selected, finishTask}: {selected: ITask | undefined, finishTask: () => void}) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(formatTimeToSeconds(selected.time))
        }
    }, [selected])

    function regression(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regression(counter - 1);
            }
            finishTask();
        }, 1000)
    }

    return (
     <div className={style.chronometer}>
        <p className={style.title}>Chose a card and start the chronometer</p>
         <div className={style.clockWrapper}>
             <Clock time={time} />
         </div>
         <Button text={'Start'}
            onClick={() => regression(time)}
         />
     </div>
 )
}
import style from './clock.module.scss';
import {formatSecondsToTime} from "../../../common/utils/time";

export default function Clock({time}: {time: number | undefined}) {
    const [minuteTen, minuteUnit, secondTen, secondUnit] = formatSecondsToTime(time);
    return (
     <>
        <span className={style.clockNumber}>{minuteTen}</span>
        <span className={style.clockNumber}>{minuteUnit}</span>
        <span className={style.clockDivision}>:</span>
        <span className={style.clockNumber}>{secondTen}</span>
        <span className={style.clockNumber}>{secondUnit}</span>
     </>
 )
}
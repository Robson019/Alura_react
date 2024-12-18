import style from './button.module.scss';

export default function Button({type, text, onClick}: { type?: "button" | "submit" | "reset" | undefined, text: string, onClick?: () => void }) {
    type = type || "button";
    return (
      <button onClick={onClick} type={type} className={style.buttonStyle}>
          {text}
      </button>
    );
}
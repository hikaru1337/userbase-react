const Button = ({onClick, text, disabled}) => {
  return (
    <button disabled={disabled} className={ `${!disabled ? `hover:scale-105` : `opacity-50`} text-white rounded-xl w-full font-gothampromedium h-10 transition-all bg-indigo-400`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

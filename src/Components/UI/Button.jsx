const Button = ({ onFunction, title }) => {
  return (
    <button
      className="border border-solid border-green-400 rounded-xl px-5 py-2 hover:bg-green-700 hover:text-white hover:text-[18px]"
      onClick={onFunction}
    >
      {title}
    </button>
  );
};

export default Button;

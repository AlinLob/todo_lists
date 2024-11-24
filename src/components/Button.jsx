const Button = ({ onClick, label, className, ...props }) => {
  return (
    <>
      <button
        type="button"
        className={`btn ${className}`}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    </>
  );
};

export default Button;

const Button = ({ icon, className, text, func }) => {
  const handleClick = () => {
    // Call the provided function when the button is clicked
    if (func && typeof func === 'function') {
      func();
    }
  };

  return (
    <>
      <button className={className} onClick={handleClick}>
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;

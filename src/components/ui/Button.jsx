const Button = (props) => {
  return (
    <button
      {...props}
      className={`font-karla text-dark font-bold px-4 py-1.5 rounded-xl w-max transition-all hover:scale-105 ${props.className}`}
    >
      {props.children}
    </button>
  )
}
export default Button

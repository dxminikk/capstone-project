const TextBox = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props}
        className={`font-karla border border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:shadow-lg outline-none text-dark px-4 py-1.5 rounded-xl w-max transition-all ${props.className}`}
      />
    </>
  )
}
export default TextBox

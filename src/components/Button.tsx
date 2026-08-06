interface ButtonProps {
    children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return (
    <button className="mix-blend-normal bg-orange-800 rounded-lg p-2 m-2">{ children }</button>
  )
}

export default Button
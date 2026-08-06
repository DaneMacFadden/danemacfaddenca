interface ButtonProps {
    children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-white rounded-lg p-2 m-2 transition-all hover:scale-105 hover:shadow-white hover:shadow-xl">{ children }</button>
  )
}

export default Button
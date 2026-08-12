interface ButtonProps {
  link?: string
  children: React.ReactNode
}

function Button({ link, children }: ButtonProps) {
  const buttonContent = (
      <button className="bg-darklimie text-limietxt-active rounded-lg p-2 m-2 transition-all hover:scale-105 hover:shadow-slate-900 hover:shadow-xl">{children}</button>
  )

  if (link) {
    return <a href={link}>{buttonContent}</a>
  }
  return buttonContent
}

export default Button
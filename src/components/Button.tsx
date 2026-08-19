import { motion } from "motion/react"

interface ButtonProps {
  link?: string
  children: React.ReactNode
}
// 
function Button({ link, children }: ButtonProps) {
  const buttonContent = (
      <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.9, y: 1 }} transition={{ type: "spring", duration: 0.5 }} className="bg-darklimie text-limietxt-active rounded-lg p-2 m-2">{children}</motion.button>
  )

  if (link) {
    return <a href={link}>{buttonContent}</a>
  }
  return buttonContent
}

export default Button
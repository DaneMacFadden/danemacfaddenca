import { motion } from "motion/react"

interface ButtonProps {
  link?: string
  children: React.ReactNode
}
// 
function Button({ link, children }: ButtonProps) {
  const buttonContent = (
      <motion.button whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9, y: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-darklimie text-limietxt-active rounded-lg py-2 px-5 m-2">{children}</motion.button>
  )

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{buttonContent}</a>
    // For testing purposes
    // return <a href="#">{buttonContent}</a>
  }
  return buttonContent
}

export default Button
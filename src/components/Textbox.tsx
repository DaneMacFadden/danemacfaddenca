import { motion } from "motion/react"

interface TextboxProps {
    children: React.ReactNode
}

function Textbox({ children }: TextboxProps) {
    return (
        <motion.div className="rounded-md bg-limie p-10 mx-10" initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 1}}>
            <p className="text-limietxt mx-10 text-sm md:text-base lg:text-lg my-5">{children}</p>
        </motion.div>
    )
}

export default Textbox
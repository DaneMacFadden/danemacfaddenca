import { motion } from "motion/react"

interface ImgCardProps {
    imgloc: string
    delay: number
    children: React.ReactNode

}

function ImgCard({imgloc, children}: ImgCardProps) {
    return (
        <>
            <motion.div className="bg-darklimie text-limietxt-active rounded-md w-50 h-50 m-5 p-5" initial={{y: -50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ ease: "easeIn", duration: 1}}>
                <div className="pt-35">{ children }</div>
            </motion.div>
        </>
    )
}

export default ImgCard
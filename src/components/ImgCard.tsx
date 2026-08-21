import { motion } from "motion/react"

interface ImgCardProps {
    imgloc: string
    textProps: string
    children: React.ReactNode
}

function ImgCard({imgloc, textProps, children}: ImgCardProps) {
    return (
        <>
            <motion.div className="bg-darklimie text-limietxt-active rounded-md w-50 h-55 m-5" initial={{y: -28, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ ease: "easeOut", duration: 1.5}}>
                <div className="p-2"><img className="rounded-md" src={ imgloc }></img></div>
                <div className={ textProps }>{ children }</div>
            </motion.div>
        </>
    )
}

export default ImgCard
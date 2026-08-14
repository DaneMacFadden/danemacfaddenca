import { motion } from "motion/react"

interface ImgCardProps {
    imgloc: string
    children: React.ReactNode

}

function ImgCard({imgloc, children}: ImgCardProps) {
    return (
        <>
            <motion.div className="bg-darklimie text-limietxt-active rounded-md w-50 h-50 m-5 p-5">
                <div className="pt-35">{ children }</div>
            </motion.div>
        </>
    )
}

export default ImgCard
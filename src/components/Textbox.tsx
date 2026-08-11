interface TextboxProps {
    children: React.ReactNode
}

function Textbox({ children }: TextboxProps) {
    return (
        <div className="rounded-md bg-limie p-5">
            <p className="text-limietxt mx-10 text-sm md:text-base lg:text-lg my-5">{ children }</p>
        </div>
    )
}

export default Textbox
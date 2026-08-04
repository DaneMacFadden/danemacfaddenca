interface TextboxProps {
    children: string
}

function Textbox({ children }: TextboxProps) {
    return (
        <div className="rounded-md bg-gray-500">
            <p className="text-black mx-5 text-sm md:text-base lg:text-lg my-5">{ children }</p>
        </div>
    )
}

export default Textbox
interface PropTypes {
    title: string
    text: string
}

const TextSection = ({ title, text }: PropTypes) => {
    if (!title) {
        title = "> what is CryptoDicks?"
    }
    if (!text) {
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit repudiandae nesciunt. Unde, sed culpa hic labore a voluptas repellat. Quidem est quis ratione corporis, culpa modi optio numquam sint?"
        text += "\n"
        text += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit repudiandae nesciunt. Unde, sed culpa hic labore a voluptas repellat. Quidem est quis ratione corporis, culpa modi optio numquam sint?"
    }
    return (
        <section className="max-w-5xl mx-auto my-10 sm:my-20 md:my-24 px-6 text-justify	">
            <h2 className="text-xl tracking-tight text-pink-500 my-4 font-mono">
                {title}
            </h2>
            {text.split("\n").map((line, i) => (
                <p key={i} className="text-md sm:text-xl sm:leading-10">
                    {line}
                </p>
            ))}
            
        </section>
    )
}

export const CenteredTextSection = ({ text }: { text: string}) => {
    if (!text) {
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit repudiandae nesciunt. Unde, sed culpa hic labore a voluptas repellat. Quidem est quis ratione corporis, culpa modi optio numquam sint?"
        text += "\n"
        text += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit repudiandae nesciunt. Unde, sed culpa hic labore a voluptas repellat. Quidem est quis ratione corporis, culpa modi optio numquam sint?"
    }
    return (
        <section className="max-w-5xl mx-auto my-10 sm:my-20 md:my-24 px-6">
            <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-6 text-center">
                {text}
            </p>
        </section>
    )
}

export default TextSection
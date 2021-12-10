interface PropTypes {
    title: string
    text: JSX.Element
}

const TextSection = ({ title, text }: PropTypes) => {
  return (
    <section className={`max-w-4xl mx-auto my-8 sm:my-12 md:my-16 px-6 `}>
      <h2 className="text-xl sm:text-3xl my-4 font-extrabold tracking-tight text-gray-50">
        {title}
      </h2>
      <div className="text-md sm:text-lg">
        {text}
      </div>
    </section>
  )
}

export default TextSection
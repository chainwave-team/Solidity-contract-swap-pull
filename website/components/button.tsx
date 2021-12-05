import cn from "classnames"
import { ButtonHTMLAttributes, forwardRef } from "react"

type HTMLButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color" | "size"
>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(props, ref) {
        let classNames = cn(
            "w-full sm:w-auto flex-none",
            "font-mono leading-6 py-3 px-6",
            "rounded-xl",
            "space-x-2 sm:space-x-4",
            "transition-colors duration-200",
            "focus:outline-none",
        )

        if (props.variant === "primary") {
            classNames = cn(classNames, "bg-purple-400 text-gray-900 hover:bg-purple-300")
        } else {
            classNames = cn(classNames, "bg-green-400 text-gray-900 hover:bg-green-300")
        }

        return (
            <button 
                ref={ref} 
                {...props} 
                className={cn(props.className, classNames)} 
            />
        )
    }
)

export default Button
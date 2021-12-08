import cn from "classnames"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react"

interface StyleProps {
  variant: "primary" | "secondary"
}

const getClassnames = (props: StyleProps) => {
  let classNames = cn(
    "w-full sm:w-auto flex-none py-3 px-6",
    "font-mono font-medium leading-6 text-center",
    "text-gray-900 hover:text-gray-900",
    "rounded-xl",
    "space-x-2 sm:space-x-4",
    "transition-colors duration-200",
    "focus:outline-none",
  )

  if (props.variant === "primary") {
      classNames = cn(classNames, "bg-purple-400  hover:bg-purple-300")
  } else {
      classNames = cn(classNames, "bg-green-300 hover:bg-green-200")
  }

  return classNames
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyleProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(props, ref) {
        return (
            <button 
                ref={ref} 
                {...props} 
                className={cn(props.className, getClassnames(props))} 
            />
        )
    }
)

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function Button(props, ref) {
      return (
          <a 
              ref={ref} 
              {...props} 
              className={cn(props.className, getClassnames(props))} 
          />
      )
  }
)

export default Button
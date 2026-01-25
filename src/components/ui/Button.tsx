import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  showTrailingIcon?: boolean
  children: React.ReactNode
}

/**
 * Button Component
 * 
 * Primary button: Blue fill (#007AC8), white text
 * Secondary button: White fill, blue border and text
 * Ghost button: Transparent, blue text
 * 
 * @example
 * <Button variant="primary" onClick={handleClick}>Continue</Button>
 * <Button variant="secondary" fullWidth>See Your Options</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'default',
    fullWidth = false,
    loading = false,
    showTrailingIcon = false,
    disabled,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'flex items-center justify-center gap-2 font-semibold rounded-[8px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed max-w-[410px] mx-auto'
    
    const variants = {
      primary: 'bg-primary-700 !text-white hover:bg-primary-750 active:bg-primary-800',
      secondary: 'bg-white text-primary-700 border border-primary-700 hover:bg-neutral-100 active:bg-neutral-100',
      ghost: 'bg-transparent text-primary-700 hover:bg-neutral-100 active:bg-neutral-100',
    }
    
    const sizes = {
      sm: 'px-4 py-2 min-h-[36px] text-body-sm',
      default: 'px-6 py-3 min-h-[48px] text-body',
      lg: 'px-8 py-4 min-h-[56px] text-body-lg',
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {children}
            {showTrailingIcon && variant === 'primary' && (
              <img src="/trailing icon.svg" alt="" className="w-6 h-6" aria-hidden="true" />
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

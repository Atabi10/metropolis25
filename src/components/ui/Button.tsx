import { forwardRef } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

type Variant = 'primary' | 'outline' | 'navy' | 'ghost' | 'gold-gradient'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:       'btn-primary btn',
  outline:       'btn-outline btn',
  navy:          'btn-navy btn',
  ghost:         'btn-ghost btn',
  'gold-gradient': 'btn inline-flex items-center justify-center gap-2 font-heading font-semibold uppercase tracking-widest text-sm bg-gold-gradient text-navy-950 hover:brightness-110 active:scale-95 transition-all duration-250 shadow-gold-md',
}

const sizeClasses: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'px-8 py-4',
  lg: 'btn-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external = false,
      loading = false,
      icon,
      iconPosition = 'right',
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'w-full',
      (disabled || loading) && 'opacity-60 cursor-not-allowed pointer-events-none',
      className
    )

    const content = (
      <>
        {loading && (
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {icon && iconPosition === 'left' && !loading && icon}
        {children}
        {icon && iconPosition === 'right' && !loading && icon}
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

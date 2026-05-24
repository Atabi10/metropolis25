import { clsx } from 'clsx'

interface SectionHeaderProps {
  label?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  dark?: boolean
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  dark = true,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {/* Label */}
      {label && (
        <div
          className={clsx(
            'section-label',
            align === 'center' && 'justify-center',
            align === 'right' && 'justify-end'
          )}
        >
          {label}
        </div>
      )}

      {/* Title */}
      <h2
        className={clsx(
          'section-title mb-4',
          dark ? 'text-white' : 'text-navy-900',
          titleClassName
        )}
      >
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="text-gold-gradient">{titleHighlight}</span>
          </>
        )}
      </h2>

      {/* Divider */}
      <div
        className={clsx(
          'h-1 w-16 bg-gold mb-6',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto'
        )}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={clsx(
            'section-subtitle leading-relaxed',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto',
            dark ? 'text-text-secondary' : 'text-navy-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

import type { ReactNode } from 'react'
import Reveal from './Reveal'
import './SectionHeading.css'

type SectionHeadingProps = {
  index?: string
  eyebrow: string
  title: ReactNode
  align?: 'left' | 'center'
  children?: ReactNode
}

/** Shared section header: editorial numeral + gold eyebrow + display title. */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  align = 'left',
  children,
}: SectionHeadingProps) {
  return (
    <Reveal className={`sh sh--${align}`}>
      <div className="sh-top">
        {index ? <span className="section-index">{index}</span> : null}
        <span className={`eyebrow${align === 'center' ? ' eyebrow--center' : ''}`}>
          {eyebrow}
        </span>
      </div>
      <h2 className="heading-lg sh-title">{title}</h2>
      {children ? <p className="lead sh-lead">{children}</p> : null}
    </Reveal>
  )
}

import { AnchorHTMLAttributes } from "react"
import '@/app/styling/text.scss'
import './style.scss'

export default function Anchor({ href, target, children }: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
  return (
    <a className="ui-black-text ui-anchor" href={href} target={target}>
      {children}
    </a>
  )
}

import React from "react"
import './style.scss'

type BackgroundlessSection = {
  children: React.ReactNode
}

export default function BackgroundlessSection({ children }: BackgroundlessSection): JSX.Element {
  return (
    <section className="backgroundless-section">
      <div>
        {children}
      </div>
    </section>
  )
}

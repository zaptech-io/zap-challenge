import { useRef } from "react"
import './style.scss'

type ExmaplesProps = {
  items: Array<{
    title: string,
    examples: [
      {
        name: string,
        title: string
      }, {
        name: string,
        title: string
      }, {
        name: string,
        title: string
      }
    ]
  }
  >
}

export default function Examples({ items }: ExmaplesProps): JSX.Element {
  const titles = useRef<Array<{ title: string }>>(items.filter(i => ({ title: i.title })));

  return (
    <div className="ui-examples">
      <div className="ui-examples__buttons">
        {titles.current.map(t => (
          <button>{t.title}</button>
        ))}
      </div>
    </div>
  )
}

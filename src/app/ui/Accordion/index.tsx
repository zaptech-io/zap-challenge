import './style.scss'
import '../../styling/text.scss'

type AccordionProps = {
  items: Array<{
    title: string;
    text: string;
  }>
}

export default function Accordion({ items }: AccordionProps): JSX.Element {
  return (
    <div className="ui-accordion">
      {items.map((i, index) => (
        <details open={index === 0}>
          <summary className='ui-subtitle'>
            {i.title}
            <i className="fas fa-plus"></i>
          </summary>
          <div>
            <p className='ui-text'>{i.text}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

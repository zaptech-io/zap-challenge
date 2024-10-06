import { useState } from 'react';
import './style.scss'
import Button from '../Button';
import ArrowRight from '@/app/images/arrow-right';
import ArrowLeft from '@/app/images/arrow-left';
import { transform } from 'next/dist/build/swc';
import Image from 'next/image';

type TestimonialsProps = {
  items: Array<
    {
      name: string;
      position: string;
      text: string;
      image: string;
    }
  >
}

export default function Testimonials({ items }: TestimonialsProps): JSX.Element {
  const [step, setStep] = useState<number>(1)

  function addLeftZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  return (
    <div className="ui-testimonials">
      <div className='ui-testimonials__sliders' style={{ '--_translate': step }}>
        {items.map((testimonial, index) => (
          <div>
            <p>"{testimonial.text}"</p>
            <div aria-hidden={step - 1 !== index} className='ui-testimonials__person'>
              <Image src={testimonial.image} height={70} width={70} alt={testimonial.name} />
              <div>
                <span>{testimonial.name}</span>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='ui-testimonials__buttons'>
        <Button click={() => setStep(step - 1)} icon={<ArrowLeft />} disabled={step === 1} />
        <div>
          <span>{addLeftZero(step)}</span><span>/{addLeftZero(items.length)}</span>
        </div>
        <Button click={() => setStep(step + 1)} icon={<ArrowRight />} disabled={step === items.length} />
      </div>
    </div>
  )
}

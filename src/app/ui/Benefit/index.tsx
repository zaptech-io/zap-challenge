import ArrowRight from '@/app/images/arrow-right';
import '../../styling/text.scss'
import Button from '../Button';
import './style.scss'

type BenefitProps = {
  color: string;
  text: string;
  time: number;
  title: string;
}

export default function Benefit({ color, text, time, title }: BenefitProps): JSX.Element {
  return (
    <div className="ui-benefit">
      <div className="ui-benefit__header">
        <div>
          <span style={{ backgroundColor: color }} />
          <span className='ui-small-text'>{time}min. read</span>
        </div>
        <h2 className="ui-subtitle">{title}</h2>
      </div>
      <div className="ui-benefit__bottom">
        <p className="ui-small-text">{text}</p>
        <Button click={() => alert('Talvez abrir um modal, ou ir pra outra página...')} icon={<ArrowRight />} />
      </div>
    </div>
  );
}

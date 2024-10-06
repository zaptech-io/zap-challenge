'use client';
import { useRef } from 'react';
import '@/app/styling/block.scss'
import '@/app/page.scss'
import Image from 'next/image';
import BackgroundlessSection from '@/app/ui/BackgroudlessSection'
import Button from './ui/Button'
import Anchor from './ui/Anchor';
import Benefit from './ui/Benefit';
import Testimonials from './ui/Testimonials';
import ArrowRight from './images/arrow-right';
import Play from './images/play';
import Logo from './images/logo';
import Facebook from './images/facebook';
import Twitter from './images/twitter';
import LinkedIn from './images/linkedin';
import Instagram from './images/instagram';
import Phone from './images/phone';
import Mail from './images/mail';
import Location from './images/location';
import Bell from './images/bell';
import Afterpay from './images/afterpay';
import Basecamp from './images/basecamp';
import Maze from './images/maze';
import Accordion from './ui/Accordion';
import Examples from './ui/Examples';

type Testimonial = {
  name: string;
  position: string;
  text: string;
  image: string;
}

type Benefit = {
  color: string;
  text: string;
  time: number;
  title: string;
}

export default function Home(): JSX.Element {
  const benefits = useRef<Array<Benefit>>([
    {
      color: '#45A7DE',
      text: 'We are the top digital marketing agency for  branding corp. We offer a full rang  engine. We are the top digital marketing agency for  branding corp. We offer a full rang  engine',
      time: 5,
      title: 'How a Digital Marketing Agency Can Boost Your Business',
    }, {
      color: '#45A7DE',
      text: 'We are the top digital marketing agency for  branding corp. We offer a full rang  engine. We are the top digital marketing agency for  branding corp. We offer a full rang  engine',
      time: 5,
      title: 'How a Digital Marketing Agency Can Boost Your Business',
    }, {
      color: '#45A7DE',
      text: 'We are the top digital marketing agency for  branding corp. We offer a full rang  engine. We are the top digital marketing agency for  branding corp. We offer a full rang  engine',
      time: 5,
      title: 'How a Digital Marketing Agency Can Boost Your Business',
    }
  ]),
    testimonials = useRef<Array<Testimonial>>([
      {
        name: 'Michael Kaizer',
        position: 'CEO of Basecamp Corp',
        text: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
        image: 'https://picsum.photos/200'
      }, {
        name: 'Michael Kaizer',
        position: 'CEO of Basecamp Corp',
        text: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
        image: 'https://picsum.photos/200'
      }, {
        name: 'Michael Kaizer',
        position: 'CEO of Basecamp Corp',
        text: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
        image: 'https://picsum.photos/200'
      }
    ]),
    faqs = useRef<Array<{ text: string; title: string; }>>([
      {
        title: "Why is digital marketing important for my business?",
        text: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
      }, {
        title: "Why is digital marketing important for my business?",
        text: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
      }, {
        title: "Why is digital marketing important for my business?",
        text: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
      },
    ]),
    examples = useRef([
      {
        title: 'All Work',
        examples: [
          {
            name: 'Ai Corporation. 2023',
            title: 'Ai Wave - Ai Chatbot Mobile App'
          }, {
            name: 'Ai Corporation. 2023',
            title: 'Ai Wave - Ai Chatbot Mobile App'
          }, {
            name: 'Ai Corporation. 2023',
            title: 'Ai Wave - Ai Chatbot Mobile App'
          }
        ]
      }, {
        title: 'All Work',
        examples: [
          {
            name: 'Ai Corporation. 2023',
            title: 'Ai Wave - Ai Chatbot Mobile App'
          }, {
            name: 'Ai Corporation. 2023',
            title: 'Ai Wave - Ai Chatbot Mobile App'
          }, {
            name: 'Ai Corporation. 2023',
            title: 'Ai Wave - Ai Chatbot Mobile App'
          }
        ]
      }
    ])

  return (
    <>
      <header className="ui-container menu">
        <nav>
          <ul>
            <li><a href='/'><Logo /></a></li>
            <li><a href='/' className='ui-black-text'>Service</a></li>
            <li><a href='/' className='ui-black-text'>Agency</a></li>
            <li><a href='/' className='ui-black-text'>Case study</a></li>
            <li><a href='/' className='ui-black-text'>Resources</a></li>
            <li><a href='/' className='ui-black-text'>Contact</a></li>
          </ul>
        </nav>
        <div className='menu__buttons'>
          <Button click={() => alert('Bora lá!')}>Get started</Button>
          <Button click={() => alert('Vou receber notificações')} icon={<Bell />} is_bright={false} />
        </div>
      </header>
      <section className='ui-container presentation'>
        <div className='presentation__text'>
          <h1 className='presentation__title'>Stay ahead of the curve with our forward-thinking</h1>
          <p className='ui-text'>An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.</p>
          <div>
            <Button click={() => alert('Vamos agendar!')} icon={<ArrowRight />}>Schedule Call</Button>
            <Anchor href='https://google.com' target='_blank'>View Case Study</Anchor>
          </div>
          <div>
            <p className='ui-small-black-text'>Trusted by the world's biggest brands</p>
            <Afterpay />
            <Basecamp />
            <Maze />
          </div>
        </div>
        <div className='presentation__'>
        </div>
      </section>
      <section className="ui-container about">
        <div>
          <h1 className="ui-section-title">Provide the best service with out of the box ideas</h1>
          <p className="ui-text">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
        </div>
        <div>
          <div className='about__info'>
            <span>920</span>
            <span className="ui-text">Project finish with superbly</span>
            <div>
              {[1, 2, 3, 4].map(_ => <Image src="https://picsum.photos/200" alt="Um texto." height={70} width={70} />)}
            </div>
          </div>
          <div className='about__video'>
            <p>how we work</p>
            <span><Play /></span>
          </div>
        </div>
      </section>
      <BackgroundlessSection>
        <div className='ui-container examples'>
          <h1 className='ui-section-title'>Real-world examples of how we have helped companies achieve their marketing objectives.</h1>
        </div>
      </BackgroundlessSection>
      <section className="ui-container">
        <Testimonials items={testimonials.current} />
      </section>
      <BackgroundlessSection>
        <div className="ui-container faqs">
          <div className="faqs__content">
            <h1 className="ui-section-title">Digital Marketing FAQs</h1>
            <p className="ui-text">As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</p>
            <div className='faqs__links'>
              <Button click={() => alert('Vou pra tela de FAQ.')}>More Questions</Button>
              <Anchor href='https://google.com.br' target='_blank'>Contact Us</Anchor>
            </div>
          </div>
          <div>
            <Accordion items={faqs.current} />
          </div>
        </div>
      </BackgroundlessSection>
      <section className='ui-container benefits'>
        <div className="benefits__content">
          <h1 className="ui-section-title">Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue</h1>
          <div>
            <p className='ui-text'>We are the top digital marketing agency for  branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.</p>
            <Button click={() => alert('Vamos ver mais.')}>See more</Button>
          </div>
        </div>
        <div className="benefits__items">
          {benefits.current.map((benefit: Benefit, index) => <Benefit {...benefit} key={index} />)}
        </div>
      </section>
      <BackgroundlessSection>
        <div className='ui-container join'>
          <h1>Ready to work with us?</h1>
          <Button click={() => alert('Bora lá!')} is_bright icon={<ArrowRight />}>
            Get Started
          </Button>
        </div>
      </BackgroundlessSection>
      <footer className="ui-container footer">
        <div className="footer__info">
          <Logo />
          <p className="ui-text">
            We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
          </p>
          <div>
            <a href='https://google.com' target='_blank'><Facebook /></a>
            <a href='https://google.com' target='_blank'><Twitter /></a>
            <a href='https://google.com' target='_blank'><LinkedIn /></a>
            <a href='https://google.com' target='_blank'><Instagram /></a>
          </div>
        </div>
        <div className="footer__menu">
          <nav>
            <ul>
              <li>Navigation</li>
              <li><a href='https://google.com' target='_blank'>Service</a></li>
              <li><a href='https://google.com' target='_blank'>Agency</a></li>
              <li><a href='https://google.com' target='_blank'>Case study</a></li>
              <li><a href='https://google.com' target='_blank'>Resource</a></li>
              <li><a href='https://google.com' target='_blank'>Contact</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Licence</li>
              <li><a href='https://google.com' target='_blank'>Privacy Policy</a></li>
              <li><a href='https://google.com' target='_blank'>Copyright</a></li>
              <li><a href='https://google.com' target='_blank'>Email Address</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Contact</li>
              <li>
                <Phone />
                <a href="tel:(406) 555-0120">(406) 555-0120</a>
              </li>
              <li>
                <Mail />
                <a href='mail:Hey@boostim.com'>Hey@boostim.com</a>
              </li>
              <li>
                <Location />
                <a href='https://www.google.com.br/maps/place/kreative+Solutions/@29.7421631,-95.424722,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c0e92e0628c9:0xcffbb134c76ad5bf!8m2!3d29.7421631!4d-95.4221417!16s%2Fg%2F11tsv76qtt?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D' target='_blank'>
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

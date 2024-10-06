import React, { ReactNode } from 'react';
import './style.scss'
import '@/app/styling/text.scss'

type ButtonPros = {
  click: () => void;
  children?: ReactNode;
  is_bright?: boolean
  icon?: ReactNode
  disabled?: boolean;
}

export default function Button({ click, children, is_bright, icon, disabled }: ButtonPros): JSX.Element {
  return <button
    className="ui-black-text ui-button"
    onClick={() => !disabled && click()}
    aria-label={is_bright ? 'bright' : 'dark'}
    disabled={disabled}
  >
    {children}
    {icon}
  </button>
}

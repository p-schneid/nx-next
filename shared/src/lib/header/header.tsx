import {  ReactNode } from 'react';
//import styles from './shared.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  children: ReactNode
}

export function Header({children}: HeaderProps) {
  return ( <h1>{children}</h1> );
}

export default Header;

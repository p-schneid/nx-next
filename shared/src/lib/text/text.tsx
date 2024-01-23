import {  ReactNode } from 'react';

/* eslint-disable-next-line */
export interface TextProps {
  children: ReactNode
}

export function Text({children}: TextProps) {
  return ( <p>{children}</p> );
}

export default Text;

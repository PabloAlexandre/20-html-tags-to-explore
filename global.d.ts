import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      column: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      grid: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
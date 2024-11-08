import { Variants } from 'framer-motion'

export const getScrollAnimation = (): Variants => {
  return {
    offscreen: {
      y: 120,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
      },
    }),
  }
}

import {Box} from '@chakra-ui/react'
import {motion} from 'framer-motion'
const MotionBox = motion.create(Box)

export const OpacityBox = ({children, ...props}) => (
  <MotionBox
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    {...props}>
    {children}
  </MotionBox>
)

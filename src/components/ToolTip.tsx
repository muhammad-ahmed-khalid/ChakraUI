import React from 'react'
import { Tooltip, Box, Tag} from '@chakra-ui/react'

function ToolTip(props) {
  const {mainText, toolTipText} = props || {}
  const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
    <Box p='1'>
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  ))
  
  return (
    <Tooltip label={toolTipText}>
       <CustomCard>{mainText}</CustomCard>
  </Tooltip>
  )
}

export default ToolTip
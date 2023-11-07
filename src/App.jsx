import { useState } from 'react'
import './App.css'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { Tooltip } from '@chakra-ui/react'
import ToolTip from './components/ToolTip'
import TableComp from './components/Table'

function App() {
  return (
    <ChakraProvider>
      <ToolTip mainText="poola" toolTipText="Ao Tofi Dun" />
      <TableComp />
    </ChakraProvider>
  )
}

export default App

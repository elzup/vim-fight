// @flow
import * as React from 'react'
import FieldContainer from '../FieldContainer'
import LogMonitorContainer from '../LogMonitorContainer'

import styled from 'styled-components'

const Base = styled.div`
  background: black;
  color: white;
`

const App = () => (
  <Base>
    <h2>Vim Fight</h2>
    <FieldContainer />
    <LogMonitorContainer />
  </Base>
)

export default App

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
    <p>Vim emulate(Redux + FlowType + s2s)</p>
    <FieldContainer />
    <LogMonitorContainer />
  </Base>
)

export default App

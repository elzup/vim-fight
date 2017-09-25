// @flow
import * as React from 'react'

import styled from 'styled-components'
type Props = { stack: string, history: string }

const Monitor = styled.div`border-top: solid green 2px;`

const LogMonitor = (props: Props) => (
  <Monitor>
    <p>Stack: {props.stack}</p>
    <p>Log: {props.history}</p>
  </Monitor>
)

export default LogMonitor

// @flow
import * as React from 'react'
import type { Square as SquareProp, Players } from '../../types'

import styled from 'styled-components'

type Props = $Shape<SquareProp & Players>

const CodeCharactor = styled.div`
  width: 0.6em;
  background: ${props => (props.on ? 'red' : 'black')};
`

const Square = (props: Props) => (
  <CodeCharactor on={props.players.length > 0}>{props.charactor}</CodeCharactor>
)

export default Square

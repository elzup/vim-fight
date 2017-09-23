// @flow
import * as React from 'react'
import type { Square as SquareProp } from '../../types'

import styled from 'styled-components'

type Props = $Shape<SquareProp>

const CodeCharactor = styled.div`width: 0.6em;`

const Square = (props: Props) => (
  <CodeCharactor>{props.charactor}</CodeCharactor>
)

export default Square

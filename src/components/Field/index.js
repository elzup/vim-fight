// @flow
import * as React from 'react'
import styled from 'styled-components'

import type { Field as FieldProps } from '../../types'
import Square from '../Square'

type Props = $Shape<FieldProps>

const Code = styled.div`
  padding: 20px;
  background: black;
  color: white;
  font-size: 30px;
`

const CodeLine = styled.div`
  display: flex;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
`

const Field = (props: Props) => (
  <Code>
    {props.squares.map(squares => (
      <CodeLine>
        {squares.map(square => <Square charactor={square.charactor} />)}
      </CodeLine>
    ))}
  </Code>
)

export default Field

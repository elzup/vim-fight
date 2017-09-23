// @flow
import * as React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import type { Field as FieldProps, Players } from '../../types'
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
    {_.map(props.squares, (squares, ln) => (
      <CodeLine key={ln}>
        {squares.map(square => (
          <Square
            key={square.id}
            charactor={square.charactor}
            players={square.playersId.map(id => props.players[id])}
          />
        ))}
      </CodeLine>
    ))}
  </Code>
)

export default Field

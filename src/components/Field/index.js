// @flow
import * as React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import type { Square2D, Player } from '../../types'
import Square from '../Square'

type Props = {
  squares: Square2D,
  players: Player[],
}

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
            players={square.playersId}
          />
        ))}
      </CodeLine>
    ))}
  </Code>
)

export default Field

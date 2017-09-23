// @flow
import * as React from 'react'
import type { Field as FieldProps } from '../../types'
import Square from '../Square'

type Props = $Shape<FieldProps>

const Field = (props: Props) => (
  <div>
    {props.squares.map(squares => (
      <div>
        {squares.map(square => <Square charactor={square.charactor} />)}
      </div>
    ))}
  </div>
)

export default Field

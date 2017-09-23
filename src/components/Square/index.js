// @flow
import * as React from 'react'
import type { Square as SquareProp } from '../../types'

type Props = $Shape<SquareProp>

const Square = (props: Props) => <div>{props.charactor}</div>

export default Square

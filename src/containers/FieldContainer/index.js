// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Field } from '../../types'
import FieldComponent from '../../components/Field'
import * as selectors from './selectors'

type Props = {
  field: Field,
}

class ProductsContainer extends React.Component<Props> {
  render() {
    const { props } = this
    return <FieldComponent squares={props.field.squares} players={{}} />
  }
}

const ms = (state: State) => ({
  field: selectors.getField(state),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(ProductsContainer)

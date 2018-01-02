// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import LogMonitorComponoent from '../../components/LogMonitor'
import * as selectors from '../Key/selectors'

type Props = {
  stack: string,
  history: string,
}

class LogMonitor extends React.Component<Props> {
  render() {
    const { props } = this
    return <LogMonitorComponoent stack={props.stack} history={props.history} />
  }
}

const ms = (state: State) => ({
  stack: selectors.getStack(state),
  history: selectors.getHistory(state),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(LogMonitor)

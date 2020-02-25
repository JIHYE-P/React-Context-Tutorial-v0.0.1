import React from 'react'
import { ValueConsumer } from '../contexts/ValueContext'

const Receives = () => {
  return (
    <ValueConsumer>
      {
        (context) => <div>현재 설정된 값: {context.value}</div>
      }
    </ValueConsumer>
  )
}

export default Receives
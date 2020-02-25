import React, { useState, useEffect } from 'react'
import { ValueConsumer } from '../contexts/ValueContext'

const Sends = ({value, setValue}) => { // {setValue, inputValue} Provider props
  const [input, setInput] = useState('')
  useEffect(() => {
    setInput(value)
  }, [])
  const handleChange = (ev) => {
    setInput(ev.target.value)
  } 
  const handleSubmit = (ev) => {
    ev.preventDefault()
    // props로 받은 setValue함수 호출
    setValue(input)
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleChange} />
      <button type="submit">설정</button>
    </form>
  )
}

// Consumer 를 사용하여 context값을 전달해준 컨테이너 컴포넌트
const SendsContainer = () => {
  return (
    <ValueConsumer>
      {
        ({value, actions}) => <Sends value={value} setValue={actions.setValueFunc} />
      }
    </ValueConsumer>
  )
}
export default SendsContainer
import React, { createContext, useState } from 'react'

const Context = createContext() // context 생성

// Context 안에는 Provider (제공자) Consumer (소비자) 존재
// 이 둘은 Context를 이용하기 위해 필요한 컴포넌트
// consumer는 나중에 내보내줄 때 편하도록 ValueConsumer 라고 설정
const {Provider, Consumer: ValueConsumer} = Context

// Provider에서 state를 사용하기 위해 컴포넌트 설정
const ValueProvider = ({children}) => {
  const [value, setValue] = useState('기본값입니다')

  // actions 객체는 우리가 임의로 설정하는 객체입니다.
  // 나중에 변화를 일으키는 함수들을 전달해줄때, 함수 하나하나 일일히 전달하는 것이 아니라,
  // 객체 하나로 한꺼번에 전달하기 위함입니다.
  const actions = {
    setValueFunc: (value) => setValue(value)
  }
  const providerValue = {value, actions}
  // Provider 내에서 사용할 값은, "value" 라고 부릅니다.
  // 현재 컴포넌트의 state(value) 와 actions 객체를 넣은 객체를 만들어서
  // Provider 의 value 값으로 사용하겠습니다  
  return (
    <Provider value={providerValue}>
      {children}
    </Provider>
  )
}

export {
  ValueConsumer,
  ValueProvider
}
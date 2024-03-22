// Style your elements here
import styled from 'styled-components'

const Bg = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Roboto;
`
const Container = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;
  border: 0px solid none;
  border-radius: 8px;
`

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: Roboto;
`

const Para = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #edeeff;
`

const ErrorText = styled.p`
  font-size: 13px;
  color: red;
`

const Input = styled.input`
  background-color: #edeeff;
  width: 180px;
  padding: 8px;
  color: black;
  font-size: 12px;
`

export {Bg, Input, ErrorText, Para, Heading, Container}

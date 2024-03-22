// Write your code here
import {useState} from 'react'

import {
  Bg,
  Input,
  ErrorText,
  Para,
  Heading,
  Container,
} from './styledComponents'

const PasswordValidator = () => {
  const [search, setPassword] = useState('')

  const onUpdate = event => {
    setPassword(event.target.value)
  }

  return (
    <Bg>
      <Container>
        <Heading>Password Validator</Heading>
        <Para> Check how strong and secure is your password</Para>
        <Input type="password" onChange={onUpdate} />
        {search.length < 8 ? (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        ) : null}
      </Container>
    </Bg>
  )
}

export default PasswordValidator

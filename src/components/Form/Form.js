import dayjs from 'dayjs'
import styled from 'styled-components';
import { useState } from 'react';
import './Form.css'

const TheForm = styled.form `
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-self: center;
  border: 2px #00717F;
  border-style: groove;
  padding: 1%;
  box-shadow: 4px 4px 6px 2px  #00717F;
`
const TextInput = styled.input `
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: #00717F;

  &::placeholder {
    opacity: 1;
    color: white;
  }
`

const Submit = styled.button`
  background-color: #00A9BF;
  color: white;
  transition: 1s;

  &:hover {
    background-color: #00717F;
  } 
`

const Form = () => {

  const [message, setMessage] = useState("")
  const [errMessage, setErrMessage] = useState(false)

  const today = dayjs();
  const formattedDate = today.format('MMMM D, YYYY');

  const getRandomUser = () => {
    return Math.floor(Math.random() * 62);
  }

  const randomUserNum = getRandomUser()

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!message) {
        setErrMessage(true)
      } else {
      fetch('https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins', {
        method: 'POST',
        body: JSON.stringify({user_id:randomUserNum, message}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('ERRORROROROR')
        }
      })
      .then(res => {
        setErrMessage(false)
        setMessage('')
      })
      .catch(err => console.log(err))
     }
    }

    const updateMessage = (e) => {
      setMessage(e.target.value)
    }

  return (
      <div className="form-container">
    <TheForm>
      {formattedDate}
      <TextInput value={message} type='text' placeholder="I'm grateful for..." onChange={e => updateMessage(e)}></TextInput>
      <Submit type='submit' onClick={e => handleSubmit(e)}>Submit</Submit>
    </TheForm>
      {errMessage && <p>Please Fill Out Form</p>}
      </div>
  )
}

export default Form
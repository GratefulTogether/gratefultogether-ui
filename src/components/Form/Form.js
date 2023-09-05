import dayjs from 'dayjs'
import styled from 'styled-components';
import { useState } from 'react';

const FormContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 670px) {
    flex-direction: column;
  }
`

const TheForm = styled.form `
  display: flex;
  justify-content: space-between;
  width: 550px;
  align-self: center;
  border: 2px #00717F;
  border-style: groove;
  padding: 1%;
  box-shadow: 4px 4px 6px 2px  #00717F;
  border-radius: 10px;
  @media (max-width: 630px) {
    flex-direction: column;
    width: 300px;
    height: 200px;
    align-items: center;
  }
`
const TextInput = styled.input.attrs(({value}) => ({
 value,
type: "text"
}))`
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: #00717F;
  height: 80px;
  width: 250px;
  max-width: 250px;
  border-radius: 7px;
  &::placeholder {
    opacity: .8;
    color: white;
  }
`

const Submit = styled.button`
  background-color: #00717F;
  color: white;
  transition: .7s;
  height: fit-content;
  align-self: center;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: 'Cormorant', serif;
  font-size: 1em;
  &:hover {
    color: #000000;
    background-color: #00A9BF;
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
          throw new Error('error')
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
    <FormContainer className="form-container">
      <TheForm>
        {formattedDate}
        <TextInput value={message} maxLength="100" placeholder="Today, I'm grateful for..." onChange={e => updateMessage(e)}></TextInput>
        <Submit type='submit' onClick={e => handleSubmit(e)}>Submit</Submit>
      </TheForm>
      {errMessage && <p>Please Fill Out Form</p>}
    </FormContainer>
  )
}

export default Form
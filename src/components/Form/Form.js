import dayjs from 'dayjs'
import styled from 'styled-components';
import { useState } from 'react';

const Form = () => {

  const [message, setMessage] = useState("")

  const today = dayjs();
  const formattedDate = today.format('MMMM D, YYYY');

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

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:5000/wins', {
        method: 'POST',
        body: JSON.stringify({message}),
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
      .then(res => res.json())
      .catch(err => console.log(err))
    }

  return (
    <TheForm>
      {formattedDate}
      <TextInput value={message} type='text' placeholder='Write here' onChange={e => setMessage(e.target.value)}></TextInput>
      <Submit type='submit' onCLick={e => handleSubmit(e)}>Submit</Submit>
    </TheForm>
  )
}

export default Form
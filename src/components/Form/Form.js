import dayjs from 'dayjs'
import styled from 'styled-components';

const Form = () => {

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

  return (
    <TheForm>
      {formattedDate}
      <TextInput type='text' placeholder='Write here'></TextInput>
      <Submit type='submit'>Submit</Submit>
    </TheForm>
  )
}

export default Form
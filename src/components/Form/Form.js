import './Form.css'
import dayjs from 'dayjs'

const Form = () => {

const today = dayjs();
const formattedDate = today.format('MMMM D, YYYY');

  return (
    <form>
      {formattedDate}
      <input type='text' placeholder='Write here'></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
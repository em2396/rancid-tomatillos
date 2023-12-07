import './Error.css'
import PropTypes from 'prop-types'

const Error = ({error, message}) => {
  
  return (
    <div className='error-cont'>
      <h2 className='error-h2'>ERROR</h2>
      <h3 className='error-h3'>{error} </h3>
      <h3 className='error-h3'>{message}</h3>
    </div>
  )
}

export default Error

Error.propTypes = {
  error: PropTypes.string.isRequired, 
  message: PropTypes.string.isRequired
}
import './Error.css';
import PropTypes from 'prop-types';

const Error = ({ error, message }) => {
  return (
    <div>
      <h3 className='error-container'>Error: {message}</h3>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Error;

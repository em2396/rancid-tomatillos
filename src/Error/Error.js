import './Error.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2 className='error-container'>404 Page Not Found: The page you are looking for doesn't exist</h2>
      <Link to="/"> 
       <button className="back-to-home">Back To Home</button>
      </Link>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Error;

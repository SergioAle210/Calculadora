import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ value, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  )
}

Button.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default Button

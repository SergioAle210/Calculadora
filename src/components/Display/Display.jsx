import PropTypes from 'prop-types'

import './Display.css'

const Display = ({ value }) => {
    let displayValue = value;

    // Convertir el valor a número para la comparación
    const numericValue = Number(value);

    if (numericValue > 999999999 || value.length > 9) {
        displayValue = "ERROR";
    }

    return <div className="display">{displayValue}</div>
}

Display.propTypes = {
    value: PropTypes.string
}

export default Display

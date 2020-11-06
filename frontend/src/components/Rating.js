import React from 'react';
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {


    const num = [0, 1, 2, 3, 4];

    const render = () => {
        return num.map(i => (
            <span style={{ color }} key={i}>
                <i className={value - i >= 1 ? "fas fa-star" : value - i >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span >

        ))
    }

    return (
        <div className="rating">
            {render()}
            { `${text} Reviews`}
        </div>
    )
}

Rating.defaultProps = {
    color: "#f8e825"
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.number.isRequired,
    color: PropTypes.string
}

export default Rating;

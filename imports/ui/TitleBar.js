import React from 'react';
import PropTypes from 'prop-types';

const subtitleHandler = (subtitle) => {
    if (subtitle) {
        return <h2 className='title-bar__subtitle'>{subtitle}</h2>;
    }
}

const TitleBar = (props) => {
    return (
        <div className='title-bar'>
            <div className='wrapper'>
                <h1>{props.title}</h1>
                {subtitleHandler(props.subtitle)}
            </div>
        </div>
    );
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

TitleBar.defaultProps = {
    title: 'Default title',
}

export default TitleBar;

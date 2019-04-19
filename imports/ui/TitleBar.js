import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const subtitleHandler = (subtitle) => {
    if (subtitle) {
        return <h2 className='title-bar__subtitle'>{subtitle}</h2>;
    } else { }
}

const TitleBar = (props) => {
    return (
        // <div className='title-bar'>
        //     <div className='wrapper'>
        //         <h1>{props.title}</h1>
        //         {subtitleHandler(props.subtitle)}
        //     </div>
        // </div>
        <div className='title-bar'>
            <AppBar position="static" color="default">
                <Toolbar className>
                    <h1>{props.title}</h1>
                    {subtitleHandler(props.subtitle)}
                </Toolbar>
            </AppBar>
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

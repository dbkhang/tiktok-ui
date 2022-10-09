import classNames from 'classnames/bind';
import styles from './MessageContent.module.scss';
import PropTypes from 'prop-types';
// import React, { useState } from "react";

const cx = classNames.bind(styles);



function MessageContent({messagecontents, type}) {
    return(
        <div className={cx( type )}>
            <div className={cx('content')}> {messagecontents} </div>
        </div>
    );
}

MessageContent.propTypes = {
    messagecontents: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default MessageContent;
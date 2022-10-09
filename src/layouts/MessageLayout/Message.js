// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import React, { useState } from "react";

import { ArrowLeft, Setting, SendMessage } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import MessageContent from '../components/MessageContent';
import AccountMessage from '../components/AccountMessage';

const cx = classNames.bind(styles);

function MessageLayout() {
    const[newMessage, setNewMessage] = useState('')
    const[newMessages, setNewMessages] = useState([])



    const handleSend = () => {
        setNewMessages(prev => {
            const a = [...prev, newMessage]
            return a
        })
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('name_account')}>
                    <Link className={cx('arrow-left')} to={config.routes.home}>
                        <ArrowLeft />
                    </Link>
                    <div className={cx('name_account-top')}>
                        <h1>Messages</h1>
                        <Setting />
                    </div>
                    <div>
                        <AccountMessage></AccountMessage>
                    </div>
                    
                </div>
                <div className={cx('content_message')}>
                    <div className={cx('main_content')}>
                        <MessageContent
                            messagecontents= "noi dung tin nhan aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                            type= "get"
                        ></MessageContent>
                        <MessageContent
                            messagecontents= "noi dung tin nhan aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                            type= "send"
                        ></MessageContent>
                        {newMessages.map((newMessage, index) => (
                            <MessageContent
                                key={index}
                                messagecontents={newMessage}
                                type="send"
                                newMessage=""
                            >
                            </MessageContent>
                        )) }
                    </div>
                    <div className={cx('text_message')}>
                        <input className={cx('text')} type={'text'} value={newMessage} onChange={e => setNewMessage(e.target.value)} />

                        <button onClick={handleSend}><SendMessage className={cx('iconmessage')} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageLayout;

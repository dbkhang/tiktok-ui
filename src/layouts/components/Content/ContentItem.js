import classNames from 'classnames/bind';
import styles from './content.module.scss';
import PropTypes from 'prop-types';
import React, { useState } from "react";

import Image from "~/components/Image";
import Button from '~/components/Button';
import { Like, Comment, Share } from '~/components/Icons';

const cx = classNames.bind(styles);

function ContentItem({
    to,
    imageHeader,
    title1,
    title2,
    textContent,
    imageContent,
    numberLike,
    numberCmt,
    numberShare,
    typeButton,
}) {

    const[numberLikeChage, setNumberLikeChage] = useState(numberLike)
    const[bool, setBool] = useState(1)
    const[chageBackground, setChageBackground] = useState('')

    const clickLike = () => {
        if(bool === 1) {
            setNumberLikeChage(numberLikeChage + 1);
            setChageBackground('chageBackground')
            setBool(0)
        } else {
            setNumberLikeChage(numberLikeChage - 1);
            setChageBackground('')
            setBool(1)
        } 
    }

    return (
        <div className={cx('wrapeper')}>
            <a className={cx('display')} href={to}>
                <Image
                    className={cx('user-avatar')}
                    src={imageHeader}
                    alt='nguyen van a'
                />
            </a>
            
            <div className={cx('content-main')}>
                <div className={cx('user-name')}>
                    <div className={cx('display-WindowTab')}>
                        <a className={cx('title1')} href={to}>{title1}</a>
                        <span className={cx('title2')}>{title2}</span>
                    </div>
                    <div className={cx(typeButton)}>
                        <Button primary>Follow</Button>
                    </div>
                    
                </div>
                <span className={cx('text-content')}> {textContent} </span>
                <div className={cx('content')}>
                    <Image
                        className={cx('image')}
                        src={imageContent}
                        alt='nguyen van a'
                    />
                    <div className={cx('number-icon')}>
                        <button className={cx('icon')} onClick={clickLike} > <Like className={cx( chageBackground )} /> </button>
                        <span className={cx('numbertt')}>{numberLikeChage}</span>
                        <button className={cx('icon')}> <Comment/> </button>
                        <span className={cx('numbertt')}>{numberCmt}</span>
                        <button className={cx('icon')}> <Share /> </button>
                        <span className={cx('numbertt')}>{numberShare}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContentItem.propTypes = {
    to: PropTypes.string.isRequired,
    imageHeader: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    imageContent: PropTypes.string.isRequired,
    numberLike: PropTypes.number.isRequired,
    numberCmt: PropTypes.number.isRequired,
    numberShare: PropTypes.number.isRequired,
    typeButton: PropTypes.string.isRequired,
};

export default ContentItem;
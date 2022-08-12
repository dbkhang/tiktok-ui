import classNames from 'classnames/bind';
import styles from './WindowTab.module.scss';
import PropTypes from 'prop-types';

import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function WindowTabItem({image, title1, title2, to, numberFollower, numberLike}) {
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('header')}>
                <a href={to}>
                    <Image 
                        className={cx('user-avatar')}
                        src = {image}
                        alt="Nguyen Van A"
                    />
                </a>
                <Button primary>Follow</Button>
            </div>
            <div className={cx('link')}>
                <a href={to}> {title1} </a>
                <a href={to}> {title2} </a>
            </div>
            
            <div className={cx('information')}>
                <span> {numberFollower} Follower </span>
                {/* <span>Follower</span> */}
                <span> {numberLike} Like</span>
                {/* <span>Like</span> */}
            </div>
        </div>
    );
}

WindowTabItem.propTypes = {
    image: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    numberFollower: PropTypes.number.isRequired,
    numberLike: PropTypes.number.isRequired,
};

export default WindowTabItem;
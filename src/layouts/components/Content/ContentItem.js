import classNames from 'classnames/bind';
import styles from './content.module.scss';
import PropTypes from 'prop-types';
import Image from "~/components/Image";
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ContentItem({
    to,
    imageHeader,
    title1,
    title2,
    textContent,
    imageContent,
    iconLike,
    iconCmt,
    iconShare,
    numberLike,
    numberCmt,
    numberShare,
    typeButton,
}) {

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
                    <Button className={cx(typeButton)} primary>Follow</Button>
                </div>
                <span className={cx('text-content')}> {textContent} </span>
                <div className={cx('content')}>
                    <Image
                        className={cx('image')}
                        src={imageContent}
                        alt='nguyen van a'
                    />
                    <div className={cx('number-icon')}>
                        <button className={cx('icon')}>{iconLike}</button>
                        <span className={cx('numbertt')}>{numberLike}</span>
                        <button className={cx('icon')}>{iconCmt}</button>
                        <span className={cx('numbertt')}>{numberCmt}</span>
                        <button className={cx('icon')}>{iconShare}</button>
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
    iconLike: PropTypes.node.isRequired,
    iconCmt: PropTypes.node.isRequired,
    iconShare: PropTypes.node.isRequired,
    numberLike: PropTypes.number.isRequired,
    numberCmt: PropTypes.number.isRequired,
    numberShare: PropTypes.number.isRequired,
    typeButton: PropTypes.string.isRequired,
};

export default ContentItem;
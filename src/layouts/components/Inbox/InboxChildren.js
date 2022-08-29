import classNames from 'classnames/bind';
import styles from './Inbox.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function InboxChildren({ imageUser, imagePost, nameUser, title, to }) {
    return (
        <NavLink className={(nav) => cx('inboxChildren-wrapper', { active: nav.isActive })} to={to}>
            <Image 
                className={cx('user-avatar')}
                src = {imageUser}
                alt="Nguyen Van A"
            />
            <div className={cx('contentChildren')}>
                <span className={cx('nameUser')}>{nameUser}</span>
                <span className={cx('title')}>{title}</span>
            </div>
            <Image 
                className={cx('imagePost')}
                src = {imagePost}
                alt="Nguyen Van A"
            />
        </NavLink>
    );
}

InboxChildren.propTypes = {
    imageUser: PropTypes.string.isRequired,
    imagePost: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default InboxChildren;
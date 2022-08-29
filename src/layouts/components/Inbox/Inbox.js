import classNames from 'classnames/bind';
import styles from './Inbox.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Inbox( {children} ) {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('arrow-top')}></div>
            <div className={cx('main')}>
                <div className={cx('top')}>
                    <h4>Notifications</h4>
                    <div className={cx('top-container')}>
                        <span>All activity</span>
                        <span>Likes</span>
                        <span>Comments</span>
                        <span>Mentions and tags</span>
                        <span>Followers</span>
                    </div>
                </div>
                <div className={cx('container')}>
                    {children}
                </div>
            </div>
        </nav>
    );
}

Inbox.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Inbox;
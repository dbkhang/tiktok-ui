import classNames from 'classnames/bind';
import styles from './WindowTab.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function WindowTab( {children} ) {
    return (
        <nav className={cx('wrapper')}>
            {children}
        </nav>
    );
}

WindowTab.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WindowTab;
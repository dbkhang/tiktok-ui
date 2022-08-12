import classNames from 'classnames/bind';
import styles from './Suggested.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Suggested( {children} ) {
    return (
        <nav className={cx('wrapper')}>
            {children}
            <div className={cx('border')}></div>
        </nav>
    );
}

Suggested.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Suggested;
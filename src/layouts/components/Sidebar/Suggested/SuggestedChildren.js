import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Suggested.module.scss';
import Image from '~/components/Image';
// import WindowTab, {WindowTabItem} from '../../WindowTab';

const cx = classNames.bind(styles);

function SuggestedChildren({ image, title1, title2, to }) {
    return (
        <NavLink className={(nav) => cx('Suggested-item', { active: nav.isActive })} to={to}>
            <Image 
                className={cx('user-avatar')}
                src = {image}
                alt="Nguyen Van A"
            />
            <div className={cx('title-group')}>
                <span className={cx('title1')}>{title1}</span>
                <span className={cx('title2')}>{title2}</span>
            </div>
        </NavLink>
    );
}


SuggestedChildren.propTypes = {
    image: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default SuggestedChildren;
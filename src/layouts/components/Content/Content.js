import classNames from 'classnames/bind';
import styles from './content.module.scss';

const cx = classNames.bind(styles);

function Content({ children }) {
    return (
        <div>
            {children}
            <div className={cx('border-bottom')}></div>
        </div>
    );
}

export default Content;
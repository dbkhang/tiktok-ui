import classNames from 'classnames/bind';
import styles from './AccountMessage.module.scss';

import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountMessage() {
    return (
        <div className={cx('main')}>
            <div className={cx('container')}>
                <Image
                    className={cx('user-avatar')}
                    src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727"
                    alt='nguyen van a'
                />
                <div className={cx('content')}>
                    <span className={cx('nameAccount')}>khang</span>
                    <span>8:30am</span>
                </div>
            </div>
        </div>
    )
}

export default AccountMessage;
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <Link to={config.routes.userProfile}>
                    <div className={cx('account-item')}>
                        <img
                            className={cx('avatar')}
                            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727"
                            alt=""
                        />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>khang</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>khang</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
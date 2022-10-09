import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import Inbox from '../Inbox';
import InboxChildren from '../Inbox/InboxChildren';
// import { click } from '@testing-library/user-event/dist/click';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@khang',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const [xh, setXh] = useState("none")
    const [color, setColor] = useState("non-color")

    const clickInbox = () => {
        if (xh === "none") {
            setXh("xh");
            setColor("color");
        } else if(xh === "xh") {
            setXh("none");
            setColor("");
        }
    }


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <Link to={config.routes.upload}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <Link to={config.routes.message}>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom" >
                                <button className={cx('action-btn')} onClick={clickInbox}>
                                    <InboxIcon className={cx(color)} />
                                    <span className={cx('badge')}>12</span>
                                    <div className={cx(xh)}>
                                        <Inbox > 
                                            <InboxChildren
                                                imageUser = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                                                imagePost = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                                                nameUser = "khang"
                                                title = "test thử"
                                                to={config.routes.home}
                                            >
                                            </InboxChildren>
                                        </Inbox>
                                    </div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
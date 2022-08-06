// // import { useEffect, useState } from 'react';
// import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faCircleQuestion,
//     // faCircleXmark,
//     faCoins,
//     faEarthAsia,
//     faEllipsisVertical,
//     faGear,
//     faKeyboard,
//     faSignOut,
//     // faSpinner,
//     faUser,
// } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react';
// // import HeadlessTippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';

// import routesConfig from '~/config/routes';
// import Button from '~/components/Button';
// // import { Wrapper as PopperWrapper} from '~/components/Popper';
// import styles from './Header.module.scss';
// import images  from '~/assets/images';
// // import AccountItem from '~/components/AccountItem';
// import Menu from '~/components/Popper/Menu';
// // import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
// import Image from '~/components/Image';
// import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
// import Search from '../Search';


// const cx = classNames.bind(styles)

// const MENU_ITEMS = [
//     {
//         icon: <FontAwesomeIcon icon={faEarthAsia} />,
//         title: 'English',
//         children: {
//             title: 'Language',
//             data: [
//                 {
//                     type: 'language',
//                     code: 'en',
//                     title: 'English',
//                 },
//                 {
//                     type: 'language',
//                     code: 'vi',
//                     title: 'Tiếng Việt',
//                 },
//             ],
//         },
//     },
//     {
//         icon: <FontAwesomeIcon icon={faCircleQuestion} />,
//         title: 'Feedback and help',
//         to: '/feedback',
//     },
//     {
//         icon: <FontAwesomeIcon icon={faKeyboard} />,
//         title: 'Keyboard shortcuts',
//     },
// ];

// function Header() {
//     // const [searchResult, setSearchResult] = useState([]);
//     const currentUser = true;

//     const handleMenuChange = (menuItem) => {
//         switch (menuItem.type) {
//             case 'language':
//                 // Handle change language
//                 break;
//             default:
//         }
//     };

//     const userMenu = [
//         {
//             icon: <FontAwesomeIcon icon={faUser} />,
//             title: 'View profile',
//             to: '/@aaaa',
//         },
//         {
//             icon: <FontAwesomeIcon icon={faCoins} />,
//             title: 'Get coins',
//             to: '/coin',
//         },
//         {
//             icon: <FontAwesomeIcon icon={faGear} />,
//             title: 'Settings',
//             to: '/settings',
//         },
//         ...MENU_ITEMS,
//         {
//             icon: <FontAwesomeIcon icon={faSignOut} />,
//             title: 'Log out',
//             to: '/logout',
//             separate: true,
//         },
//     ];

//     return (
//         <header className={cx('wrapper')}>
//             <div className={cx('inner')}>
//                 <div className={cx('logo')}>
//                 <Link to={routesConfig.home} className={cx('logo-link')}>
//                     <img src={images.logo} alt="Tiktok" />
//                 </Link>
//                 </div>

//                 <Search />

//                 <div className={cx('actions')}>
//                     {currentUser ? (
//                         <>
//                             <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
//                                 <button className={cx('action-btn')}>
//                                 <UploadIcon />
//                                 </button>
//                             </Tippy>
//                             <Tippy delay={[0, 50]} content="Message" placement="bottom">
//                                 <button className={cx('action-btn')}>
//                                     <MessageIcon />
//                                 </button>
//                             </Tippy>
//                             <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
//                                 <button className={cx('action-btn')}>
//                                     <InboxIcon />
//                                     <span className={cx('badge')}>12</span>
//                                 </button>
//                             </Tippy>
//                         </>
//                     ) : (
//                         <>
//                             <Button text>Upload</Button>
//                             <Button primary>Log in</Button>
//                         </>
//                     )}

//                     <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
//                         {currentUser ? (
//                             <Image
//                                 className={cx('user-avatar')}
//                                 src="https://scontent.fhph3-1.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RVqmo51UCE8AX9-oddl&_nc_oc=AQmH2p7-XyiFPrUF0qULBgoaEq_j-ioAL_F65rmMdVKwsMEXK19e2GE3ymmF48mAkQM&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_mdcX9E0-3QsGl9YTSlGL3EU04s9HAY9evF7e5Foq60Q&oe=630813A7"
//                                 alt="AAAA"
//                             />
//                         ) : (
//                             <button className={cx('more-btn')}>
//                                 <FontAwesomeIcon icon={faEllipsisVertical} />
//                             </button>
//                         )}
//                     </Menu>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;

export { default } from './Header';
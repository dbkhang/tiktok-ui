// import PropTypes from 'prop-types';
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from 'react-router-dom';
// import classNames from "classnames/bind";
// import Image from '~/components/Image';
// import styles from './AccountItem.module.scss';

// const cx = classNames.bind(styles);

// function AccountItem({ data }) {
//     return(
//         // <div className={cx('wrapper')}>
//         //     <Image 
//         //         className={cx('avata')}
//         //         src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-1/16174731_725737350922304_4278245071131439818_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Erq1qCr6Ra0AX9u32yp&_nc_oc=AQmzruSCC-aotIxLqb5ZOKDXU1ZQ45U2Tw_3CutTT1h4Le5DY6vdR4msyyj2_s8MACs&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_68C17Bo_UHXAF77YRjlOHVZLdnFZuIwxFj26C45A5Nw&oe=630183CD" 
//         //         alt="aaa" 
//         //     />
//          <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
//             <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
//             <div className={cx('info')}>
//                 <h4 className={cx('name')}>
//                     <span>A B C</span>
//                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
//                 </h4>
//                 <span className={cx('username')}>{data.nickname}</span>
//             </div>
//         {/* </div> */}
//         </Link>
//     );
// }

// AccountItem.propTypes = {
//     data: PropTypes.object.isRequired,
// };

// export default AccountItem;

export { default } from './AccountItem';
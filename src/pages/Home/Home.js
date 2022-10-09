import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Content, {ContentItem} from '~/layouts/components/Content';
import config from '~/config';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Content classNames={cx('content')}>
                <ContentItem
                    to={config.routes.userProfile}
                    imageHeader= "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                    title1="aaa" 
                    title2="bbbbb"
                    textContent = "test thu"
                    imageContent = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                    numberLike = {3}
                    numberCmt = {6}
                    numberShare = {9}
                    typeButton = "primary"
                >
                </ContentItem>
            </Content>
        </div> 
    );
}

export default Home;
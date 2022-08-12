import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Content, {ContentItem} from '~/layouts/components/Content';
import { Like, Comment, Share } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Content classNames={cx('content')}>
                <ContentItem
                    to={config.routes.live}
                    imageHeader= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" 
                    title2="bbbbb"
                    textContent = "test thu"
                    imageContent = "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    iconLike = {<Like />}
                    iconCmt = {<Comment />}
                    iconShare = {<Share />}
                    numberLike = {3}
                    numberCmt = {6}
                    numberShare = {9}
                >
                </ContentItem>
            </Content>
        </div> 
    );
}

export default Home;
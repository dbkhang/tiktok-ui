import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import Suggested, { SuggestedChildren } from './Suggested';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>

            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            <Suggested>
                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>

                <SuggestedChildren 
                    image= "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Qgqo5_XUq0AX9GJReS&_nc_oc=AQmX13Mryy6-jG_ouHUTASEW097ALL80BclpeOnotu7L1Jcdis6Ec_7a_FQWaqbXvR4&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8GAmSNbykQszTZsOeMQtGL6ME2GZz5hFZiesiyrwk7Gw&oe=6313F127" 
                    title1="aaa" title2="bbbbb" to={config.routes.home}>
                </SuggestedChildren>
            </Suggested>
            

        </aside>
    );
}

export default Sidebar;
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Content, {ContentItem} from '~/layouts/components/Content';
import { EditIcon, XIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Profile () {
    const [username, setUsernamr] = useState("khang3005") 
    const [name, setName] = useState("khang")  
    const [bio, setBio] = useState("day la bio")  
    const [srcimg, setSrcimg] = useState("https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727")  

    const[editForm, setEditForm] = useState('edit-none')

    const clickOut = () => {
        setEditForm('edit-none')
    }

    const appearEdit = () => {
        setEditForm('')
    }

    const[textBio, setTextBio] = useState(bio)
    const numberBio = textBio.length;

    const [avatar, setAvatar] = useState(srcimg)

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    const [textUsername, setTextUsername] = useState("khang3005")
    const [textName, setTextName] = useState("khang")

    const changeProfile = () => {
        setUsernamr(textUsername)
        setName(textName)
        setBio(textBio)
        setSrcimg(avatar)
        setEditForm('edit-none')
    }

    return (
        <div>
            <div>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={srcimg}
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong> {username} </strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}> {name} </p>
                        <Button outline onClick={appearEdit}>
                            <EditIcon className={cx('editIcon')} />
                            Edit profile
                        </Button>
                    </div>
                </div>
                <div className={cx('analytics')}>
                    <strong className={cx('analytics-value')}>8.2M </strong>
                    <span className={cx('analytics-label')}>Following</span>
                    <strong className={cx('analytics-value')}>8.2M </strong>
                    <span className={cx('analytics-label')}>Followers</span>
                    <strong className={cx('analytics-value')}>8.2M </strong>
                    <span className={cx('analytics-label')}>Likes</span>
                </div>
                <div>
                    {bio}
                </div>

                <div>
                    <Content classNames={cx('content')}>
                        <ContentItem
                            to={config.routes.profile}
                            imageHeader= "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                            title1="aaa" 
                            title2="bbbbb"
                            textContent = "test thu"
                            imageContent = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                            numberLike = {3}
                            numberCmt = {6}
                            numberShare = {9}
                            typeButton = "none"
                        >
                        </ContentItem>
                    </Content>
                </div> 
                <div>
                    <Content classNames={cx('content')}>
                        <ContentItem
                            to={config.routes.profile}
                            imageHeader= "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                            title1="aaa" 
                            title2="bbbbb"
                            textContent = "test thu"
                            imageContent = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/16174731_725737350922304_4278245071131439818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t5jqczwbWmoAX9AE0Tr&_nc_oc=AQmIIACqDNM01SGPoWegePEOT2p_zY4hiPmo6EQaz7OAo0VsqXKydsgU27Zr7t0oLh0&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-O6-N2MiK1H0hyoLZwIuYi1hn1GgqZEzcrpjoEQSwIXA&oe=63436727" 
                            numberLike = {3}
                            numberCmt = {6}
                            numberShare = {9}
                            typeButton = "none"
                        >
                        </ContentItem>
                    </Content>
                </div>
            </div>

            <div className={cx( editForm )}>
                <div className={cx('background_edit')}></div>
                <div className={cx('editProfile')}>
                    <div className={cx('main')}>
                        <div className={cx('edit-content')}>
                            <div className={cx('header-edit')}>
                                <h2>Edit profile</h2>
                                <div>
                                    <button onClick={clickOut}>
                                        <XIcon className={cx('XIcon')} />
                                    </button>
                                </div>
                            </div>
                            <div className={cx('edit-container')}>
                                <div className={cx('photo-edit')}>
                                    <div className={cx('edit-left')}>
                                        <span>Profile photo</span>
                                    </div>
                                    <div className={cx('edit-right')}>
                                        {avatar &&(
                                            <img className={cx('avatar')} src={avatar.preview} alt="" />
                                        )}
                                        <input type="file" onChange={handlePreviewAvatar} />
                                        
                                    </div>
                                </div>
                                <div className={cx('username-edit')}>
                                    <div className={cx('edit-left')}>
                                        <span>Username</span>
                                    </div>
                                    <div className={cx('edit-right')}>
                                        <input className={cx('input-username')} type="text" value={textUsername} onChange={e => setTextUsername(e.target.value)} />
                                        <p>www.tiktok.com/@dangkhang3005</p>
                                        <p>Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
                                    </div>
                                </div>
                                <div className={cx('name-edit')}> 
                                    <div className={cx('edit-left')}>
                                        <span>Name</span>
                                    </div>
                                    <div className={cx('edit-right')}>
                                        <input className={cx('input-name')} type="text" value={textName} onChange={e => setTextName(e.target.value)} />
                                        <p>Your nickname can only be changed every 7 days. You can change it again after Sep 28, 2022.</p>
                                    </div>
                                </div>
                                <div className={cx('bio-edit')}>
                                    <div className={cx('edit-left')}>
                                        <span>Bio</span>
                                    </div>
                                    <div className={cx('edit-right')}>
                                        <input type='text' className={cx('input-bio')} value={textBio} onChange={e => setTextBio(e.target.value)} />
                                        <p> {numberBio}/999 </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('bottom-edit')}>
                                <Button rounded onClick={clickOut}>Canle</Button>
                                <Button rounded onClick={changeProfile}>Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Profile;
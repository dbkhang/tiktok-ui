// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UploadLayout.module.scss';
import React, { useState } from "react";

import Button from '~/components/Button';
import { UploadIcon1 } from '~/components/Icons';
// import { Link } from 'react-router-dom';
// import config from '~/config';

const cx = classNames.bind(styles);


function UploadLayout() {
    const[textValue, setTextValue] = useState('')
    const numberText = textValue.length;

    const [avatar, setAvatar] = useState('')

    const selectfile = (e) => {
        const file = e.target.files[0]
    
        file.preview = URL.createObjectURL(file)
    
        setAvatar(file)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('container')}>
                    <h1>Upload video</h1>
                    <span>Post a video to your account</span>
                    <div className={cx('content')}>
                        <div className={cx('content-left')}>
                            <input className={cx('input-content-left')} type="file" accept='image/*' onChange={selectfile}/> 
                            <div className={cx('content-left-main')}>
                                <UploadIcon1 />
                                <span className={cx('content-left-main-text1')}>Select video to upload</span>
                                <span className={cx('content-left-main-text2')}>Or drag and drop a file</span>
                                <div className={cx('content-left-main-text3')}>
                                    <span>MP4 or WebM</span>
                                    <span>720x1280 resolution or higher</span>
                                    <span>Up to 10 minutes</span>
                                    <span>Less than 2 GB</span>
                                </div>
                                <Button className={cx('btnSelect')} primary>Select file</Button>
                            </div>
                            {avatar &&(
                                <img className={cx('avatar')} src={avatar.preview} alt="" />
                            )}
                        </div>
                        <div className={cx('content-right')}>
                            <div className={cx('caption_top')}>
                                <span className={cx('lable-item')}>Caption</span>
                                <div className={cx('dk-caption')}>
                                    {numberText}
                                    <span> / 150 </span>
                                </div>
                            </div>
                            <input className={cx('input-caption')} type="text" value={textValue} onChange={e => setTextValue(e.target.value)} />

                            <span className={cx('lable-item')}>Who can view this video</span>
                            <select name="who" id="person-view" className={cx('person-view')}>
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                                <option value="Friends">Friends</option>
                            </select>
                            <span className={cx('lable-item')}>Allow users to:</span>
                            <div>
                                <div>
                                    <input type="checkbox" name="sport" value="Comment" />
                                    <label>Comment</label>
                                </div>
                                <div>
                                <input type="checkbox" name="sport" value="Duet" />
                                    <label>Duet</label>
                                </div>
                                <div>
                                <input type="checkbox" name="sport" value="Stitch" /> 
                                    <label>Stitch</label>
                                </div>
                                <Button className={cx('btn')} primary>Post</Button>
                                    
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadLayout;
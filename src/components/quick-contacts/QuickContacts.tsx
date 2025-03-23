import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./QuickContacts.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";



const QuickContacts: React.FC = () => {
    const [isQuickContactsOpen, setQuickContactsOpen] = useState<boolean>(false);

    const handleQuickContactsToggle = (state: boolean) => {
        setQuickContactsOpen(() => state);
    };

    return(
        <div className={styles.quick__block}>
            <div 
              className={styles.quick__block_list} 
              style={isQuickContactsOpen ? {transform: 'translateY(0) scaleY(1)', opacity: 1} : {}}
            >
                <div className={`${styles.quick__list_item} telegram`}>
                    <a href="https://t.me/SiegTagSound1" target="_blank" rel="nofollow noopener" aria-label="Telegram">
                        <span className={`${styles.quick__item_icon} ${styles.quick__icon_telegram}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 39 39" version="1.1">
                                <defs>
                                    <linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="16" y1="2" x2="16" y2="30" gradientTransform="matrix(1.21875,0,0,1.21875,0,0)">
                                        <stop offset="0" style={{ stopColor: 'rgb(21.568627%, 73.333333%, 99.607843%)', stopOpacity: 1 }}/>
                                        <stop offset="1" style={{ stopColor: 'rgb(0%,49.019608%,73.333333%)', stopOpacity: 1 }}/>
                                    </linearGradient>
                                </defs>
                                <g id="surface1">
                                    <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'url(#linear0)' }} d="M 36.5625 19.5 C 36.5625 10.078125 28.921875 2.4375 19.5 2.4375 C 10.078125 2.4375 2.4375 10.078125 2.4375 19.5 C 2.4375 28.921875 10.078125 36.5625 19.5 36.5625 C 28.921875 36.5625 36.5625 28.921875 36.5625 19.5 Z M 36.5625 19.5 "/>
                                    <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%, 100%, 100%)', fillOpacity: 1 }} d="M 28.015625 12.441406 C 28.167969 11.460938 27.234375 10.683594 26.359375 11.070312 L 8.976562 18.703125 C 8.351562 18.976562 8.394531 19.925781 9.042969 20.132812 L 12.628906 21.273438 C 13.3125 21.492188 14.054688 21.378906 14.652344 20.964844 L 22.734375 15.382812 C 22.980469 15.210938 23.246094 15.558594 23.035156 15.773438 L 17.21875 21.773438 C 16.652344 22.355469 16.765625 23.339844 17.445312 23.765625 L 23.960938 27.851562 C 24.691406 28.308594 25.628906 27.847656 25.765625 26.964844 Z M 28.015625 12.441406 "/>
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className={`${styles.quick__list_item} email`}>
                    <a href="mailto:siegtagprod@hotmail.com" target="_blank" rel="nofollow noopener" aria-label="Email">
                        <span className={styles.quick__item_icon}>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#FF485F"></circle>
                                <path d="M20.5379 14.2557H1.36919C0.547677 14.2557 0 13.7373 0 12.9597V1.29597C0 0.518387 0.547677 0 1.36919 0H20.5379C21.3594 0 21.9071 0.518387 21.9071 1.29597V12.9597C21.9071 13.7373 21.3594 14.2557 20.5379 14.2557ZM20.5379 12.9597V13.6077V12.9597ZM1.36919 1.29597V12.9597H20.5379V1.29597H1.36919Z" transform="translate(8.48619 12.3117)" fill="white"></path>
                                <path d="M10.9659 8.43548C10.829 8.43548 10.692 8.43548 10.5551 8.30588L0.286184 1.17806C0.012346 0.918864 -0.124573 0.530073 0.149265 0.270879C0.423104 0.0116857 0.833862 -0.117911 1.1077 0.141283L10.9659 7.00991L20.8241 0.141283C21.0979 -0.117911 21.5087 0.0116857 21.7825 0.270879C22.0563 0.530073 21.9194 0.918864 21.6456 1.17806L11.3766 8.30588C11.2397 8.43548 11.1028 8.43548 10.9659 8.43548Z" transform="translate(8.47443 12.9478)" fill="white"></path>
                                <path d="M9.0906 7.13951C8.95368 7.13951 8.81676 7.13951 8.67984 7.00991L0.327768 1.17806C-0.0829894 0.918864 -0.0829899 0.530073 0.190849 0.270879C0.327768 0.0116855 0.738525 -0.117911 1.14928 0.141282L9.50136 5.97314C9.7752 6.23233 9.91212 6.62112 9.63828 6.88032C9.50136 7.00991 9.36444 7.13951 9.0906 7.13951Z" transform="translate(20.6183 18.7799)" fill="white"></path>
                                <path d="M0.696942 7.13951C0.423104 7.13951 0.286185 7.00991 0.149265 6.88032C-0.124573 6.62112 0.012346 6.23233 0.286185 5.97314L8.63826 0.141282C9.04902 -0.117911 9.45977 0.0116855 9.59669 0.270879C9.87053 0.530073 9.73361 0.918864 9.45977 1.17806L1.1077 7.00991C0.970781 7.13951 0.833862 7.13951 0.696942 7.13951Z" transform="translate(8.47443 18.7799)" fill="white"></path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className={`${styles.quick__list_item} facebook`}>
                    <a href="https://www.facebook.com/profile.php?id=61558798857255" target="_blank" rel="nofollow noopener" aria-label="Facebook">
                        <span className={styles.quick__item_icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 39 39" version="1.1">
                                <g id="surface1">
                                    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(23.137255%, 34.901962%, 59.607846%)', fillOpacity: 1}} d="M 19.5 0 C 30.269531 0 39 8.730469 39 19.5 C 39 30.269531 30.269531 39 19.5 39 C 8.730469 39 0 30.269531 0 19.5 C 0 8.730469 8.730469 0 19.5 0 Z M 19.5 0 "/>
                                    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%, 100%, 100%)', fillOpacity: 1}} d="M 21.875 13.425781 L 24.386719 13.425781 L 24.386719 9.710938 L 21.433594 9.710938 L 21.433594 9.726562 C 17.855469 9.851562 17.121094 11.863281 17.054688 13.976562 L 17.046875 13.976562 L 17.046875 15.832031 L 14.609375 15.832031 L 14.609375 19.46875 L 17.046875 19.46875 L 17.046875 29.210938 L 20.722656 29.210938 L 20.722656 19.46875 L 23.730469 19.46875 L 24.3125 15.832031 L 20.722656 15.832031 L 20.722656 14.710938 C 20.722656 13.996094 21.199219 13.425781 21.875 13.425781 Z M 21.875 13.425781 "/>
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className={`${styles.quick__list_item} instagram`}>
                    <a href="https://www.instagram.com/siegtag_sound?igsh=YXdrb2F3MWxjdDFs" target="_blank" rel="nofollow noopener" aria-label="Instagram">
                        <span className={`${styles.quick__item_icon} ${styles.quick__icon_instagram}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 39 39" version="1.1">
                                <defs>
                                    <radialGradient id="radial0" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(17.671894,-25.593736,25.593736,17.671894,14.625,28.03125)">
                                        <stop offset="0" style={{stopColor: 'rgb(69.411765%, 20.784314%, 53.72549%)', stopOpacity: 1}}/>
                                        <stop offset="0.79309" style={{stopColor: 'rgb(77.647059%, 18.431373%, 58.039216%)', stopOpacity: 1}}/>
                                        <stop offset="1" style={{stopColor: 'rgb(54.117647%, 22.745098%, 78.431373%)', stopOpacity: 1}}/>
                                    </radialGradient>
                                    <radialGradient id="radial1" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(11.578103,-24.984322,24.984322,11.578103,13.40625,37.78125)">
                                        <stop offset="0" style={{stopColor: 'rgb(87.843137%, 90.980392%, 71.764706%)', stopOpacity: 1}}/>
                                        <stop offset="0.444662" style={{stopColor: 'rgb(98.431373%, 54.117647%, 18.039216%)', stopOpacity: 1}}/>
                                        <stop offset="0.71474" style={{stopColor: 'rgb(88.627451%, 25.882353%, 36.078431%)', stopOpacity: 1}}/>
                                        <stop offset="1" style={{stopColor: 'rgb(88.627451%, 25.882353%, 36.078431%)', stopOpacity: 0}}/>
                                    </radialGradient>
                                    <radialGradient id="radial2" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(46.921907,-6.703128,1.43373,10.03611,0.609377,3.65625)">
                                        <stop offset="0.156701" style={{stopColor: 'rgb(25.098039%, 41.568627%, 86.27451%)', stopOpacity: 1}}/>
                                        <stop offset="0.467799" style={{stopColor: 'rgb(41.568627%, 27.058824%, 74.509804%)', stopOpacity: 1}}/>
                                        <stop offset="1" style={{stopColor: 'rgb(41.568627%, 27.058824%, 74.509804%)', stopOpacity: 0}}/>
                                    </radialGradient>
                                </defs>
                                <g id="surface1">
                                    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'url(#radial0)'}} d="M 9.75 2.4375 L 29.25 2.4375 C 33.289062 2.4375 36.5625 5.710938 36.5625 9.75 L 36.5625 29.25 C 36.5625 33.289062 33.289062 36.5625 29.25 36.5625 L 9.75 36.5625 C 5.710938 36.5625 2.4375 33.289062 2.4375 29.25 L 2.4375 9.75 C 2.4375 5.710938 5.710938 2.4375 9.75 2.4375 Z M 9.75 2.4375 "/>
                                    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'url(#radial1)'}} d="M 9.75 2.4375 L 29.25 2.4375 C 33.289062 2.4375 36.5625 5.710938 36.5625 9.75 L 36.5625 29.25 C 36.5625 33.289062 33.289062 36.5625 29.25 36.5625 L 9.75 36.5625 C 5.710938 36.5625 2.4375 33.289062 2.4375 29.25 L 2.4375 9.75 C 2.4375 5.710938 5.710938 2.4375 9.75 2.4375 Z M 9.75 2.4375 "/>
                                    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'url(#radial2)'}} d="M 9.75 2.4375 L 29.25 2.4375 C 33.289062 2.4375 36.5625 5.710938 36.5625 9.75 L 36.5625 29.25 C 36.5625 33.289062 33.289062 36.5625 29.25 36.5625 L 9.75 36.5625 C 5.710938 36.5625 2.4375 33.289062 2.4375 29.25 L 2.4375 9.75 C 2.4375 5.710938 5.710938 2.4375 9.75 2.4375 Z M 9.75 2.4375 "/>
                                    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%, 100%, 100%)', fillOpacity: 1}} d="M 28.03125 12.796875 C 28.03125 13.804688 27.210938 14.625 26.203125 14.625 C 25.195312 14.625 24.375 13.804688 24.375 12.796875 C 24.375 11.789062 25.195312 10.96875 26.203125 10.96875 C 27.210938 10.96875 28.03125 11.789062 28.03125 12.796875 Z M 28.03125 12.796875 "/>
                                    <path style={{stroke: 'none', fillRule: 'evenodd', fill: 'rgb(100%, 100%, 100%)', fillOpacity: 1}} d="M 19.5 25.59375 C 22.867188 25.59375 25.59375 22.867188 25.59375 19.5 C 25.59375 16.132812 22.867188 13.40625 19.5 13.40625 C 16.132812 13.40625 13.40625 16.132812 13.40625 19.5 C 13.40625 22.867188 16.132812 25.59375 19.5 25.59375 Z M 19.5 23.15625 C 21.519531 23.15625 23.15625 21.519531 23.15625 19.5 C 23.15625 17.480469 21.519531 15.84375 19.5 15.84375 C 17.480469 15.84375 15.84375 17.480469 15.84375 19.5 C 15.84375 21.519531 17.480469 23.15625 19.5 23.15625 Z M 19.5 23.15625 "/>
                                    <path style={{stroke: 'none', fillRule: 'evenodd', fill: 'rgb(100%, 100%, 100%)', fillOpacity: 1}} d="M 7.3125 19.011719 C 7.3125 14.917969 7.3125 12.871094 8.109375 11.304688 C 8.8125 9.929688 9.929688 8.8125 11.304688 8.109375 C 12.871094 7.3125 14.917969 7.3125 19.011719 7.3125 L 19.988281 7.3125 C 24.082031 7.3125 26.128906 7.3125 27.695312 8.109375 C 29.070312 8.8125 30.1875 9.929688 30.890625 11.304688 C 31.6875 12.871094 31.6875 14.917969 31.6875 19.011719 L 31.6875 19.988281 C 31.6875 24.082031 31.6875 26.128906 30.890625 27.695312 C 30.1875 29.070312 29.070312 30.1875 27.695312 30.890625 C 26.128906 31.6875 24.082031 31.6875 19.988281 31.6875 L 19.011719 31.6875 C 14.917969 31.6875 12.871094 31.6875 11.304688 30.890625 C 9.929688 30.1875 8.8125 29.070312 8.109375 27.695312 C 7.3125 26.128906 7.3125 24.082031 7.3125 19.988281 Z M 19.011719 9.75 L 19.988281 9.75 C 22.074219 9.75 23.496094 9.75 24.59375 9.839844 C 25.660156 9.929688 26.207031 10.085938 26.589844 10.28125 C 27.503906 10.75 28.25 11.496094 28.71875 12.410156 C 28.914062 12.792969 29.070312 13.339844 29.160156 14.40625 C 29.25 15.503906 29.25 16.925781 29.25 19.011719 L 29.25 19.988281 C 29.25 22.074219 29.25 23.496094 29.160156 24.59375 C 29.070312 25.660156 28.914062 26.207031 28.71875 26.589844 C 28.25 27.503906 27.503906 28.25 26.589844 28.71875 C 26.207031 28.914062 25.660156 29.070312 24.59375 29.160156 C 23.496094 29.25 22.074219 29.25 19.988281 29.25 L 19.011719 29.25 C 16.925781 29.25 15.503906 29.25 14.40625 29.160156 C 13.339844 29.070312 12.792969 28.914062 12.410156 28.71875 C 11.496094 28.25 10.75 27.503906 10.28125 26.589844 C 10.085938 26.207031 9.929688 25.660156 9.839844 24.59375 C 9.75 23.496094 9.75 22.074219 9.75 19.988281 L 9.75 19.011719 C 9.75 16.925781 9.75 15.503906 9.839844 14.40625 C 9.929688 13.339844 10.085938 12.792969 10.28125 12.410156 C 10.75 11.496094 11.496094 10.75 12.410156 10.28125 C 12.792969 10.085938 13.339844 9.929688 14.40625 9.839844 C 15.503906 9.75 16.925781 9.75 19.011719 9.75 Z M 19.011719 9.75 "/>
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <div className={styles.quick__block_handler}>
                <button 
                  type="button" 
                  onClick={() => handleQuickContactsToggle(!isQuickContactsOpen)}
                  style={isQuickContactsOpen ? {boxShadow: '0 0 30px 1px #838383'} : {}}
                  aria-label="Quick contacts"
                >
                    <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-496 507.7 54 54">
                            <style type="text/css"></style>
                            <g>
                                <circle cx="-469" cy="534.7" r="27" fill="#86CD91"></circle>
                            </g>
                            <path className={styles.chaty_sts4_0} d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"></path>
                            <path className={styles.chaty_st0} d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"></path>
                            <path className={styles.chaty_st0} d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default QuickContacts;
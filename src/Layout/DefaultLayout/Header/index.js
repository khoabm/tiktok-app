// import classNames from 'classnames';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper';

// const cx = classNames.bind(styles)
const classes = clsx(styles.wrapper)

function Header() {
    const [searchResult, setsearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2])
        }, 0)
    }, [])
    return (
        <header className={classes}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img alt='Tiktok' src={images.logo} />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={clsx(styles['search-title'])}>
                                    
                                </h4>
                            </PopperWrapper>
                        </div>
                    )}>
                    <div className={clsx(styles.search)}>
                        <input placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={clsx(styles.clear)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />

                        <button className={clsx(styles['search-btn'])}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={clsx(styles.action)}></div>
            </div>
        </header>
    );
}

export default Header;
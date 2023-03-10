import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import clsx from 'clsx';
function Menu({ children }) {
    return (
        <div>
            <Tippy
                interactive={true}
                placement='bottom-end'
                render={attrs => (
                    <div className={clsx(styles.content)} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h2>Menu Item</h2>
                        </PopperWrapper>
                    </div>
                )}>
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
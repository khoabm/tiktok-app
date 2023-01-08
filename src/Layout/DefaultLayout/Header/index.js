// import classNames from 'classnames';
import styles from './Header.module.scss'
import clsx from 'clsx';
// const cx = classNames.bind(styles)
const classes = clsx(styles.wrapper)

function Header() {
    return (
        <header className={classes}>
            <div className={clsx(styles.inner)}></div>
        </header>
    );
}

export default Header;
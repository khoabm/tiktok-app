import clsx from "clsx";
import styles from './Button.module.scss'

import { Link } from 'react-router-dom'
function Button({ outline = false,
    primary = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    round = false,
    className,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = clsx(styles.wrapper, {
        [className]: className,
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.small]: small,
        [styles.large]: large,
        [styles.text]: text,
        [styles.disabled]: disabled,
        [styles.round]: round,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles['icon'])}>{leftIcon}</span>}
            <span className={clsx(styles['title'])}>{children}</span>
            {rightIcon && <span className={clsx(styles['icon'])}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
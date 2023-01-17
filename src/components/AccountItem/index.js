import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from './AccountItem.module.scss'
function AccountItem() {
    return (
        <div className={clsx(styles['wrapper'])}>
            <img className={clsx(styles['avatar'])} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/877abc535749b31c211d887e9b5edc2c~c5_100x100.jpeg?x-expires=1674097200&x-signature=3AgV0ieXjQZJVW6niA66MoEgeNQ%3D' alt='Khoa' />
            <div className={clsx(styles['info'])}>
                <h4 className={clsx(styles['name'])}>
                    <span>Nguyen Van B</span>
                    <FontAwesomeIcon className={clsx(styles['check'])} icon={faCheckCircle} />
                </h4>
                <span className={clsx(styles['username'])}>nguyenvanb</span>
            </div>
        </div>
    );
}

export default AccountItem;
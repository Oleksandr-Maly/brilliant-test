import { CounterItemI } from '../counters-list';
import styles from './counter-item.module.scss';

const CounterItem = ({title, value}: CounterItemI) => {
    return (
        <div className={`${styles.counterContainer} counter`}>
            <div className={styles.counterValue}>{value}</div>
            <div className={styles.counterTitle}>{title}</div>
        </div>
    );
}

export default CounterItem;
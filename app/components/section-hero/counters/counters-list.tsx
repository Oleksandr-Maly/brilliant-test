import CounterItem from "@/app/components/section-hero/counters/counter-item/counter-item";
import styles from './counters-list.module.scss';

export interface CounterItemI {
    title: string;
    value: string;
}

export type CounterData = CounterItemI[];

export const counterData: CounterData = [
    {title: 'LLM models', value: '1,873'},
    {title: 'Paid to data scientists', value: '$326,734'},
    {title: 'Developers', value: '6,557'},
]

const CountersList = () => {
    return (
        <div className={styles.countersList}>
            {counterData.map((counterItem, index) => (
                <CounterItem key={index} {...counterItem} />
            ))}
        </div>
    );
}

export default CountersList;
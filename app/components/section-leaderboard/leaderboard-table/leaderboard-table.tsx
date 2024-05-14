import {leaderboardData} from './leaderboardData';
import styles from './leaderboard-table.module.scss';
import Image from 'next/image';
import risingIcon from '@/public/icons/rising-icon.svg';
import fallingIcon from '@/public/icons/falling-icon.svg';
import neutralIcon from '@/public/icons/neutral-icon.svg';

interface LeaderboardDataItemI {
    icon: 'rising' | 'falling' | 'neutral';
    number: number;
    modelName: string;
    averageScore: number;
    hellaSwag: number;
    MMLU: number;
    trurhfullQA: number;
    Winogrande: number;
    GSM8K: number;
    usage: number;
}


export type LeaderboardData = LeaderboardDataItemI[];

const LeaderboardTable = () => {

    const getItemIcon = (icon: 'rising' | 'falling' | 'neutral') => {
        switch (icon) {
            case 'rising':
                return <Image src={risingIcon} width={24} height={24} alt={'rising icon'}/>;
            case 'falling':
                return <Image src={fallingIcon} width={24} height={24} alt={'falling icon'}/>;
            default:
                return <Image src={neutralIcon} width={24} height={24} alt={'neutral icon'}/>;
        }
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.table}>
                <div className={styles.row}>
                    <div/>
                    <div>#</div>
                    <div>Model Name</div>
                    <div>Average Score</div>
                    <div>Hella Swag</div>
                    <div>MMLU</div>
                    <div>Truthful QA</div>
                    <div>Winogrande</div>
                    <div>GSM8K</div>
                    <div>Usage</div>
                </div>
                {leaderboardData.map((item, index) => (
                    <div key={index} className={styles.row}>
                        <div>{getItemIcon(item.icon)}</div>
                        <div>{item.number}</div>
                        <div style={{flexGrow: 2}}>{item.modelName}</div>
                        <div>{item.averageScore}</div>
                        <div>{item.hellaSwag}</div>
                        <div>{item.MMLU}</div>
                        <div>{item.trurhfullQA}</div>
                        <div>{item.Winogrande}</div>
                        <div>{item.GSM8K}</div>
                        <div>{item.usage}</div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default LeaderboardTable;
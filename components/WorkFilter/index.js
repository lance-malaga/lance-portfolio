import Link from 'next/link'
import styles from './WorkFilter.module.scss'
import { work_categories } from '@/data/work_categoires'

export default function WorkFilter({slug}) {
    console.log(slug)
    return (
        <p className={styles.work__filter}> 
            Filter by {' '}
            {work_categories.map((data, index) => (
                <span key={index}>
                    <Link 
                        href={data.slug}
                        style={{color: slug == data.slug.slice(6) ? 'var(--color-orange)' : 'var(--color-black)' }}
                    >
                        {data.category}
                    </Link>
                    {index < work_categories.length - 1 ? ' / ' : ''}
                </span>
            ))}
        </p>
    )
}
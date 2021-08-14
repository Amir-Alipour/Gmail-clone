import styles from './Section.module.css'

function Section({Icon, title, color, selected}) {
    return (
        <div className={`${styles.section} ${selected && styles.section__selected}`}
            style={{
                borderBottom: `2px solid ${color}`,
                color: `${selected && color}`
            }}
        >
            <Icon style={{color: `${selected && color}`}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Section

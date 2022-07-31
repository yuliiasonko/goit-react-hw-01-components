import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistica.module.css';

const Statistica = ({ title, stats }) => (
  <section className={styles.statistica}>
    
    {title==="UPLOAD STATS" && (<h2 className={styles.title}>{title}</h2>)
}
     <ul className={styles.stat_list}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
);

Statistica.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistica;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

const Transactions = ({ items }) => (
  <table className={styles.transaction}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => {
return (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
)
})}
    </tbody>
  </table>
);


Transactions.propTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
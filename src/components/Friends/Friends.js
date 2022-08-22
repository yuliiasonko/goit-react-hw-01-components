import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

// const Friends = ({ friends }) => (
//   <ul className={styles.friend_list}>
//     {friends.map(friend => (
//       <li className={styles.item} key={friend.id}>
//         <span className={ friend.isOnline ? styles.isOnline : styles.isOffline
//           }
//         ></span>
//         <img className={styles.avatar} src={friend.avatar} alt="" width="45" height='45'/>
//         <p className={styles.name}>{friend.name}</p>
//       </li>
//     ))}
//   </ul>
// );

const FriendsList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={styles.item}>
            <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt="" width="45" height='45'/>
        <p className={styles.name}>{name}</p>
      </li>
        )
    })}
  </ul>
);


FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendsList;
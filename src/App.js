import Profile from './components/Profile/Profile';
import Statistica from './components/Statistica/Statistica';
import Friends from './components/Friends/Friends';
import Transactions from './components/Transactions/Transactions';

import React from 'react';

import user from './data/profile.json';
import statistica from './data/statistica.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';


const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistica
      title="UPLOAD STATS" stats={statistica} />
   
    <Friends
      friends={friends} />
    <Transactions
      items={transactions} />
  </>
);
export default App;

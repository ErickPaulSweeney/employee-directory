import './App.css';
import UserCard from './components/UserCard';
import users from './components/users';

function App() {

  return (
    <div className="App">
      <h1 className='header'>Users at Acme Inc.</h1>
      <div className='container-cards'>
        {users.map(user => <UserCard key={user.login.uuid} user={user} />)}
      </div>
    </div>
  );
}

export default App;
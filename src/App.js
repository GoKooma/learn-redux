// import logo from './logo.svg';
// import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <br />
      <br />
      <br />
      <div>
        {isLogged 
          ? <button onClick={() => dispatch(signOut())}>Sign out</button> 
          : <button onClick={() => dispatch(signIn())}>Log in</button>}
        {isLogged ? <h3>User Information</h3> : ''}
      </div>
    </div>
  );
}

export default App;

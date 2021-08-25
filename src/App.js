import { useSelector } from 'react-redux';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const modal = useSelector(state => state.modals);

  return (
    <div className="App">
      <Main />

      {modal.showModal && <Modal title={modal.title} />}
    </div>
  );
}

export default App;

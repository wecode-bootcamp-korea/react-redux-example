import { useSelector } from 'react-redux';
import Main from './components/Main';
import Modal from './components/Modal';
import Toast from './components/Toast';

function App() {
  const modal = useSelector(state => state.modals);
  const toast = useSelector(state => state.toast);

  return (
    <div className="App">
      <Main />

      {modal.showModal && <Modal title={modal.title} />}
      {toast.showToast && <Toast option={toast.option} />}
    </div>
  );
}

export default App;

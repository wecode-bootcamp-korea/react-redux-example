import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../store/actions/modals';
import { showToast } from '../store/actions/toast';

function Main() {
  const dispatch = useDispatch();
  const [toastMessage, setToastMessage] = useState('토스트 메시지 작성');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Redux 예제
        </p>
        <button onClick={() => dispatch(showModal('로그인'))}>모달 열기</button>

        <br />
        <input value={toastMessage} onChange={e => setToastMessage(e.target.value)} />
        <button onClick={() => dispatch(showToast({ message: toastMessage, type: 'info' }))}>토스트 띄우기</button>
      </header>
    </div>
  );
}

export default Main;

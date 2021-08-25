import { useDispatch } from 'react-redux';
import { showModal } from '../store/actions/modals';

function Main() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Redux 예제
        </p>
        <button onClick={() => dispatch(showModal('로그인'))}>모달 열기</button>
      </header>
    </div>
  );
}

export default Main;

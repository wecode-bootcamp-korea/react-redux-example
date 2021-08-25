import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/modals';
import './Modal.css';

function Modal({ title }) {
  const dispatch = useDispatch();

  return (
    <div className="Modal">
      <h1>{title}</h1>

      <button onClick={() => dispatch(closeModal())}>닫기</button>
    </div>
  );
}

export default Modal;

import './Toast.scss';

function Toast({ option }) {
  return (
    <div className={`toast ${option.type}`}>
      <p>{option.message}</p>
    </div>
  );
}

export default Toast;

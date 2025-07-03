import ReactDOM from "react-dom";

export function Modal({ children, onClose }) {
  const modalContent = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}

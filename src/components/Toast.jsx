const Toast = ({ message, show }) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 
        px-4 py-3 rounded-lg shadow-lg
        bg-rose-600 text-white text-sm
        transition-all duration-300
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      {message}
    </div>
  );
};

export default Toast;
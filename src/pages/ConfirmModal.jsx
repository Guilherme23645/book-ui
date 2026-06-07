const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white border border-navy rounded-lg p-6 w-full max-w-sm text-center">
        <p className="text-navy text-lg mb-4">
          {message}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="
              border
              border-white
              rounded-lg
              px-4 py-2
              bg-navy
              text-white
              hover:border-navy
              hover:bg-white
              hover:text-navy
              transition
              duration-500
              ease-in-out
              cursor-pointer
            "
          >
            Confirm
          </button>

          <button
            onClick={onCancel}
            className="
              border
              border-navy
              rounded-lg
              px-4 py-2
              bg-white
              text-navy
              hover:bg-navy
              hover:text-white
              transition
              duration-500
              ease-in-out
              cursor-pointer
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
import { X } from "lucide-react";

interface DeletePopupProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

const DeletePopup = ({
  title,
  message,
  onConfirm,
  onClose,
}: DeletePopupProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 w-[90%] max-w-sm shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>

        {/* Warning message */}
        <p className="text-gray-600 mb-5 text-sm">{message}</p>

        {/* Action buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

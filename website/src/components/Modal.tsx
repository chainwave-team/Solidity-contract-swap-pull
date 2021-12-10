import React, { useRef, useState } from "react"
import { useLockedBody, useOnClickOutside } from "usehooks-ts"

import { CloseIcon } from "./Icons"

interface ModalProps {
  open?: boolean
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void
}

export function useModal(): [boolean, { openModal: () => void, closeModal: () => void }] {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return [open, { openModal, closeModal }]
}

function Modal({ open, title, content, footer, onClose }: ModalProps) {
  const modalContentRef = useRef(null);

  useOnClickOutside(modalContentRef, onClose);
  useLockedBody(open)

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-10 inset-0"
      role="dialog"
      aria-modal="true"
    >
      <div className="pt-4 px-4 pb-20 text-center sm:p-0">
        {/*
          Background overlay, show/hide based on modal state.
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        */}
        <div
          className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        {/*
          Modal panel, show/hide based on modal state.
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        */}
        <div
          ref={modalContentRef}
          className="relative inline-block top-20 bg-gray-900 rounded-lg text-left overflow-hidden shadow-6xl transform transition-all sm:my-8 sm:max-w-lg w-full"
        >
          <button
            onClick={onClose}
            className="absolute top-0 right-0 h-6 w-6 hover:text-gray-300 flex items-center justify-center m-6"
          >
            <CloseIcon />
          </button>

          <div className="p-4 sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="w-full text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-base leading-6 font-medium text-gray-50 mb-6 font-mono"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-2 w-full text-sm text-gray-500">
                  {content}
                </div>
              </div>
            </div>
          </div>

          {footer && (
            <div className="px-6 py-6 sm:px-6 sm:flex sm:flex-row sm:justify-end">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;

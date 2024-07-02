"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}
const Modal = ({ children, onClose }: ModalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("modal-open");
    ref.current = document.querySelector("#modal-container");
    setMounted(true);
    return () => {
      document.documentElement.classList.remove("modal-open");
    };
  }, []);

  return mounted
    ? createPortal(
        <div>
          <div
            style={{
              position: "fixed",
              backgroundColor: "rgba(7, 7, 7, 0.5)",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
            }}
          ></div>
          <div className="fixed left-0 top-0 w-full h-full bg-[#070707] bg-opacity-50 flex justify-center items-center">
            <div className="m-auto p-8">
              <div className="flex flex-col items-center">{children}</div>
            </div>
          </div>
        </div>,
        ref.current as Element
      )
    : null;
};

export default Modal;

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Feedback } from "./Feedback";

interface FeedbackDialogProps {
  open: boolean;
  onClose: VoidFunction;
}

export const FeedbackDialog = ({ open, onClose }: FeedbackDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // showModal() is what gives us the backdrop, the focus trap and Esc support,
  // so the native open state is driven from the prop. This is also what closes
  // the dialog for the button and backdrop paths below: they only report the
  // intent, and the dialog follows the prop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Esc closes the dialog natively, without going through React at all, so the
  // prop has to be told. Both events are observed because a programmatic
  // close() does not reliably emit `close`, which would otherwise leave `open`
  // stuck true and make the dialog impossible to reopen.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const sync = () => onClose();
    dialog.addEventListener("cancel", sync);
    dialog.addEventListener("close", sync);
    return () => {
      dialog.removeEventListener("cancel", sync);
      dialog.removeEventListener("close", sync);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="feedback-title"
      // A click on the backdrop is reported against the dialog itself.
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="modal-header">
        <h2 id="feedback-title" className="text-lg font-bold">
          Send feedback
        </h2>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close feedback form"
        >
          <X />
        </button>
      </div>
      <div className="modal-body">
        {/* Mounted only while open, so the third-party form is not fetched
            on every page load. */}
        {open && <Feedback />}
      </div>
    </dialog>
  );
};

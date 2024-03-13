import './Modal.css'

export default function Modal({children, handleClose, isSalesModal}) {
  return (
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          }}>  
          { children }
          <button onClick={handleClose}> Close </button>
        </div>
      </div>
  )  
}

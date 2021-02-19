import "./StatusToggle.scss";

function StatusToggle({ statusType, setStatusType }) {
  return (
    <div className="statusToggle">
      <div className={`statusType ${statusType === 1 ? "selected" : ""}`} onClick={() => setStatusType(1)}>
        All
      </div>
      <div className={`statusType ${statusType === 2 ? "selected" : ""}`} onClick={() => setStatusType(2)}>
        Open
      </div>
      <div className={`statusType ${statusType === 3 ? "selected" : ""}`} onClick={() => setStatusType(3)}>
        Done
      </div>
    </div>
  );
}

export default StatusToggle;

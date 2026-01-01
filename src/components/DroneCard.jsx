export default function DroneCard({ drone, onClick, isActive }) {
  return (
    <div
      className={`drone-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {/* Drone ID */}
      <div className="drone-id">{drone.id}</div>

      {/* Diagonal Status Slice */}
      <div className={`status-slice ${drone.status.toLowerCase()}`}>
        <span>{drone.status}</span>
      </div>
    </div>
  );
}

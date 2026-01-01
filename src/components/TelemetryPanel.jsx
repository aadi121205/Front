export default function TelemetryPanel({ drone }) {
  if (!drone) return null;

  return (
    <div className="telemetry-panel">
      <h3 style={{ color: drone.color }}>{drone.id} Telemetry</h3>
      <p><b>Speed:</b> {drone.speed} m/s</p>
      <p><b>Latitude:</b> {drone.lat}</p>
      <p><b>Longitude:</b> {drone.lon}</p>
      <p><b>Battery:</b> {drone.battery}%</p>
      <p><b>Mode:</b> {drone.mode}</p>
      <p><b>Status:</b> {drone.status}</p>
    </div>
  );
}

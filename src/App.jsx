import { useState } from "react";
import { drones } from "./data/telemetry";
import DroneList from "./components/DroneList";
import TelemetryPanel from "./components/TelemetryPanel";
import "./App.css";

export default function App() {
  const [selectedDrone, setSelectedDrone] = useState(drones[0]);

  return (
    <div className="gcs">
      <div className="left-panel">
        <TelemetryPanel drone={selectedDrone} />
        <DroneList
          drones={drones}
          onSelect={setSelectedDrone}
          selected={selectedDrone.id}
        />
      </div>

      <div className="main-panel">
        <h2>Map / Video Feed Area</h2>
      </div>

      <div className="command-panel">
        <h3>Commands</h3>
      </div>
    </div>
  );
}

import DroneCard from "./DroneCard";

export default function DroneList({ drones, onSelect, selected }) {
  return (
    <div className="drone-list">
      {drones.map(drone => (
        <DroneCard
          key={drone.id}
          drone={drone}
          isActive={selected === drone.id}
          onClick={() => onSelect(drone)}
        />
      ))}
    </div>
  );
}

import { Text, RoundedBox, Edges } from "@react-three/drei";

export function NamePlate({ setSection, hoveredObject, setHoveredObject }) {
  return (
    <RoundedBox
      args={[2.5, 0.8, 0.05]}
      radius={0.07}
      smoothness={4}
      position={[0.7, 1.7, 0.1]}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
        setHoveredObject("NamePlate");
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
        setHoveredObject(null);
      }}
      onClick={() => setSection("about")}
    >
      <meshStandardMaterial color="#0d1f52" emissive={hoveredObject === "NamePlate" ? "#00ffff" : "#000000"} 
    emissiveIntensity={hoveredObject === "NamePlate" ? 0.02 : 0} />
      <Edges
        threshold={15}
        color={hoveredObject === "NamePlate" ? "#ffffffbe" : "#00ffff"}
        lineWidth={hoveredObject === "NamePlate" ? 3 : 1.7}
      />
      
      <Text
        position={[0, 0.2, 0.03]}
        fontSize={0.25}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        Neto Reviero
      </Text>

      <Text position={[0, -0.1, 0.03]} fontSize={0.15} color="#00ffff">
        Desenvolvedor Front-End React
      </Text>
    </RoundedBox>
  );
}

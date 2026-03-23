import { Text, RoundedBox, Edges } from '@react-three/drei'

export function NamePlate() {
  return (
    <RoundedBox 
      args={[2.5, 0.8, 0.05]}
      radius={0.07}
      smoothness={4}
      position={[0.7, 1.7, 0.1]}
    >
      <meshStandardMaterial color="#0d1f52" />
      <Edges
        threshold={15}
        color="#00ffff"
        lineWidth={2}
      />
      
      <Text
        position={[0, 0.2, 0.03]}
        fontSize={0.25}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        Meu Nome
      </Text>

      <Text
        position={[0, -0.1, 0.03]}
        fontSize={0.15}
        color="#00ffff"
      >
        Desenvolvedor Front-End React
      </Text>
    </RoundedBox>
  );
}

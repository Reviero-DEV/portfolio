export default function Window() {
    return (
        <>
        <mesh position={[-4.9, 2.5, -2.5]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial color= "#cfcfcf" />
        </mesh>
        <mesh position={[-4.9, 2.5, -2.5]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial color= "#87ceeb"
            transparent
            opacity={0.5} />
        </mesh>
        </>
    )
}
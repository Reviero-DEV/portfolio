export default function Window() {
    return (
        <>
        <mesh position={[2.5, 2.5, -4.9]}>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial color= "#cfcfcf" />
        </mesh>
        <mesh position={[2.5, 2.5, -4.9]}>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial color= "#87ceeb"
            transparent
            opacity={0.5} />
        </mesh>
        </>
    )
}
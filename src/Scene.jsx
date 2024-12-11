import { Environment, OrbitControls, PerspectiveCamera, GizmoHelper, GizmoViewcube } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import envMap from "./assets/envmap.hdr";
import { Car } from "./Car";
import { useFrame } from "@react-three/fiber";

console.log(<Car />);

export function Scene() {
	const cameraRef = useRef();
	const scrollRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			// Map scroll position to an angle
			scrollRef.current = window.scrollY * 1;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useFrame(() => {
		if (cameraRef.current) {
			// Adjust the camera's position based on scroll
			const angle = scrollRef.current;
			const radius = 10; // Distance from the car
			const x = Math.sin(angle) * radius;
			const z = Math.cos(angle) * radius;
			cameraRef.current.position.set(x, 2, z); // Maintain a slight height
			cameraRef.current.lookAt(0, 0.4, 0); // Always look at the car
		}
	});
	return (
		<Suspense fallback={null}>
			<GizmoHelper>
				<GizmoViewcube />
			</GizmoHelper>
			<Environment files={envMap} background="both" />
			<PerspectiveCamera makeDefault ref={cameraRef} fov={15} />
			<Car />
			<directionalLight position={[5, 5, 5]} intensity={1} castShadow />
			<ambientLight intensity={0.4} />
		</Suspense>
	);
}

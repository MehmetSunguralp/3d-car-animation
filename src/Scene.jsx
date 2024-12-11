import { Environment, PerspectiveCamera, GizmoHelper, GizmoViewcube } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import envMap from "./assets/envmap.hdr";
import { Car } from "./Car";
import { useFrame } from "@react-three/fiber";

export function Scene() {
	const cameraRef = useRef();
	const [scrollValue, setScrollValue] = useState(-1); // State to track scroll

	useEffect(() => {
		const handleScroll = () => {
			setScrollValue(window.scrollY * 0.002 - 1); // Scale scroll for smoother rotation
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []); // No dependencies needed here

	useFrame(() => {
		if (cameraRef.current) {
			const radius = 10; // Distance from the car
			const x = Math.sin(scrollValue) * radius;
			const z = Math.cos(scrollValue) * radius;
			cameraRef.current.position.set(x, 4, z); // Maintain height
			cameraRef.current.lookAt(0, 0.3, 0); // Focus on the car
		}
	});

	return (
		<Suspense fallback={null}>
			<GizmoHelper>
				<GizmoViewcube />
			</GizmoHelper>
			<Environment files={envMap} background="both" />
			<PerspectiveCamera makeDefault ref={cameraRef} fov={20} />
			<Car />
			<directionalLight position={[5, 5, 5]} intensity={1} castShadow />
			<ambientLight intensity={0.4} />
		</Suspense>
	);
}

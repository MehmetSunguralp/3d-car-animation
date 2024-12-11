import { Environment, OrbitControls, PerspectiveCamera, GizmoHelper, GizmoViewcube } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import envMap from "./assets/envmap.hdr";
import { Car } from "./Car";

console.log(<Car />);

export function Scene() {
	return (
		<Suspense fallback={null}>
			<GizmoHelper>
				<GizmoViewcube />
			</GizmoHelper>
			<Environment files={envMap} background="both" />
			<Car />
			{/* 	<PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} /> */}
			<OrbitControls target={[-2.64, -0.71, 0.03]} enableZoom={false} />
			<directionalLight position={[5, 5, 5]} intensity={1} castShadow />
			<ambientLight intensity={0.4} />
		</Suspense>
	);
}

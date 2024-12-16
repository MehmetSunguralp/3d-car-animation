import React, { useEffect, useRef, useState } from "react";
import { Euler } from "three";
import mustangModel from "./assets/scene.gltf";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Mustang(props) {
	const { nodes, materials } = useGLTF(mustangModel);
	console.log(nodes);

	// Ref for wheel nodes
	const wheelFrontLeftRef = useRef();
	const wheelFrontRightRef = useRef();
	const wheelBackLeftRef = useRef();
	const wheelBackRightRef = useRef();

	// States for rigging
	const [isWheelsRotating, setIsWheelsRotating] = useState(false);
	const [steeringDirection, setSteeringDirection] = useState(0); // -1 = left, 1 = right, 0 = straight

	useFrame(() => {
		if (isWheelsRotating) {
			// Rotate wheels continuously
			if (wheelFrontLeftRef.current && wheelFrontRightRef.current && wheelBackLeftRef.current && wheelBackRightRef.current) {
				wheelFrontLeftRef.current.rotation.x += 0.1; // Forward rotation
				wheelFrontRightRef.current.rotation.x += 0.1;
				wheelBackLeftRef.current.rotation.x += 0.1;
				wheelBackRightRef.current.rotation.x += 0.1;
			}
		}

		// Steer front wheels
		if (wheelFrontLeftRef.current && wheelFrontRightRef.current) {
			const steeringAngle = steeringDirection * 0.5; // Adjust steering

			// Use Euler for precise steering control, rotating on Y-axis for left/right steering
			const leftWheelEuler = new Euler(0, steeringAngle, 0, "XYZ"); // Y-axis rotation for steering
			const rightWheelEuler = new Euler(0, steeringAngle, 0, "XYZ");

			wheelFrontLeftRef.current.setRotationFromEuler(leftWheelEuler);
			wheelFrontRightRef.current.setRotationFromEuler(rightWheelEuler);
		}
	});

	// Keyboard controls
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "w" || e.key === "ArrowUp") {
				setIsWheelsRotating(true); // Start rotation
			}
			if (e.key === "a" || e.key === "ArrowLeft") {
				setSteeringDirection(1); // Steer left
			}
			if (e.key === "d" || e.key === "ArrowRight") {
				setSteeringDirection(-1); // Steer right
			}
		};

		const handleKeyUp = (e) => {
			if (e.key === "w" || e.key === "ArrowUp") {
				setIsWheelsRotating(false); // Stop rotation
			}
			if (e.key === "a" || e.key === "ArrowLeft" || e.key === "d" || e.key === "ArrowRight") {
				setSteeringDirection(0); // Reset steering
			}
		};

		// Add listeners
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return (
		<group {...props} dispose={null}>
			<group position={[0, 1.675, 3.486]} rotation={[-1.571, 0, 0]}>
				<group position={[0.001, -0.242, -1.674]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.Window_Sticker} />
					<mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.Body_Paint} />
					<mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.Sticker_11} />
					<mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.Sticker_2} />
					<mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.Sticker_5} />
					<mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.Sticker_4} />
					<mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.Sticker_10} />
					<mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.Sticker_3} />
					<mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.Sticker_1} />
					<mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.Sticker_6} />
					<mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.Sticker_8} />
					<mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.Sticker_7} />
					<mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.Sticker_9} />
					<mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.Lights} />
					<mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.Bolts} />
					<mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.Glass} />
					<mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.Carbon_Fiber_2} />
					<mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.Carbon_Fiber_1} />
					<mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.Light_2} />
					<mesh castShadow receiveShadow geometry={nodes.Object_25.geometry} material={materials.Sticker_12} />
					<mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.Tail_Lights} />
					<mesh castShadow receiveShadow geometry={nodes.Object_27.geometry} material={materials.Back_Logo} />
					<mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.Carbon_Fiber_3} />
					<mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials.Leather} />
					<mesh castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.Metal} />
					<mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials.Black_Plastic} />
					<mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials.Inner_Rim} />
					<mesh castShadow receiveShadow geometry={nodes.Object_33.geometry} material={materials.Glossy_Black} />
					<mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials.Glossy_Black} />
					<mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials.Under_Shell} />
					<mesh castShadow receiveShadow geometry={nodes.Object_36.geometry} material={materials.Under_Shell} />
					<mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.Chassis} />
				</group>
			</group>
			<group position={[2.533, 0.932, 7.426]} ref={wheelFrontLeftRef}>
				<group position={[-2.532, 3.698, -0.931]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials.Tire_Logo} />
					<mesh castShadow receiveShadow geometry={nodes.Object_41.geometry} material={materials.material} />
					<mesh castShadow receiveShadow geometry={nodes.Object_42.geometry} material={materials.Inner_Rim} />
					<mesh castShadow receiveShadow geometry={nodes.Object_43.geometry} material={materials.Caliper} />
					<mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials.Tail_Lights} />
					<mesh castShadow receiveShadow geometry={nodes.Object_45.geometry} material={materials.Tire_Bolts} />
					<mesh castShadow receiveShadow geometry={nodes.Object_46.geometry} material={materials.Tire} />
				</group>
			</group>
			<group position={[-2.53, 0.932, 7.426]} ref={wheelFrontRightRef}>
				<group position={[2.532, 3.698, -0.931]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh castShadow receiveShadow geometry={nodes.Object_49.geometry} material={materials.Tire_Logo} />
					<mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials.material} />
					<mesh castShadow receiveShadow geometry={nodes.Object_51.geometry} material={materials.Inner_Rim} />
					<mesh castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials.Caliper} />
					<mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials.Tail_Lights} />
					<mesh castShadow receiveShadow geometry={nodes.Object_54.geometry} material={materials.Tire_Bolts} />
					<mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={materials.Tire} />
				</group>
			</group>
			<group position={[2.533, 0.931, 0]} ref={wheelBackLeftRef}>
				<group position={[-2.532, -3.729, -0.931]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh castShadow receiveShadow geometry={nodes.Object_58.geometry} material={materials.Tire_Logo} />
					<mesh castShadow receiveShadow geometry={nodes.Object_59.geometry} material={materials.material} />
					<mesh castShadow receiveShadow geometry={nodes.Object_60.geometry} material={materials.Inner_Rim} />
					<mesh castShadow receiveShadow geometry={nodes.Object_61.geometry} material={materials.Caliper} />
					<mesh castShadow receiveShadow geometry={nodes.Object_62.geometry} material={materials.Tail_Lights} />
					<mesh castShadow receiveShadow geometry={nodes.Object_63.geometry} material={materials.Tire_Bolts} />
					<mesh castShadow receiveShadow geometry={nodes.Object_64.geometry} material={materials.Tire} />
				</group>
			</group>
			<group position={[-2.53, 0.931, 0]} ref={wheelBackRightRef}>
				<group position={[2.532, -3.729, -0.931]} rotation={[Math.PI / 2, 0, 0]} ref={wheelBackRightRef}>
					<mesh castShadow receiveShadow geometry={nodes.Object_67.geometry} material={materials.Tire_Logo} />
					<mesh castShadow receiveShadow geometry={nodes.Object_68.geometry} material={materials.material} />
					<mesh castShadow receiveShadow geometry={nodes.Object_69.geometry} material={materials.Inner_Rim} />
					<mesh castShadow receiveShadow geometry={nodes.Object_70.geometry} material={materials.Caliper} />
					<mesh castShadow receiveShadow geometry={nodes.Object_71.geometry} material={materials.Tail_Lights} />
					<mesh castShadow receiveShadow geometry={nodes.Object_72.geometry} material={materials.Tire_Bolts} />
					<mesh castShadow receiveShadow geometry={nodes.Object_73.geometry} material={materials.Tire} />
				</group>
			</group>
		</group>
	);
}

useGLTF.preload(mustangModel);

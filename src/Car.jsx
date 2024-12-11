import React, { act, useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import car from "./assets/car4.glb";
import gsap from "gsap";

export function Car(props) {
	const group = useRef();
	const tl = useRef();
	const { nodes, materials, animations } = useGLTF(car);

	const { actions } = useAnimations(animations, group);
	console.log(actions);
	useEffect(() => {
		actions["Animation"].reset().fadeIn(0.5).play();
	});
	return (
		<group ref={group} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							<group name="Body_5">
								<mesh name="Object_4" castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Body_08} />
								<mesh
									name="Object_5"
									castShadow
									receiveShadow
									geometry={nodes.Object_5.geometry}
									material={materials.BodyGlass_08}
								/>
								<group name="EngineV6_0" position={[-0.625, 0.198, 0.002]} rotation={[-0.001, 0, 0]}>
									<mesh
										name="Object_7"
										castShadow
										receiveShadow
										geometry={nodes.Object_7.geometry}
										material={materials.Body_08}
									/>
								</group>
								<group name="Suspension_FL_1" position={[-0.574, 0.376, 0.301]} rotation={[-0.161, -0.01, 0.063]}>
									<mesh
										name="Object_9"
										castShadow
										receiveShadow
										geometry={nodes.Object_9.geometry}
										material={materials.Body_08}
									/>
								</group>
								<group name="Suspension_FR_2" position={[-0.574, 0.376, -0.301]} rotation={[-0.161, 0.01, -0.063]}>
									<mesh
										name="Object_11"
										castShadow
										receiveShadow
										geometry={nodes.Object_11.geometry}
										material={materials.Body_08}
									/>
								</group>
								<group name="Suspension_RL_3" position={[0.617, 0.372, 0.324]} rotation={[0.038, -0.01, 0.063]}>
									<mesh
										name="Object_13"
										castShadow
										receiveShadow
										geometry={nodes.Object_13.geometry}
										material={materials.Body_08}
									/>
								</group>
								<group name="Suspension_RR_4" position={[0.617, 0.371, -0.325]} rotation={[0.038, -0.015, -0.062]}>
									<mesh
										name="Object_15"
										castShadow
										receiveShadow
										geometry={nodes.Object_15.geometry}
										material={materials.Body_08}
									/>
								</group>
							</group>
							<group name="Wheel_FL_6" position={[-0.603, 0.165, 0.489]}>
								<mesh
									name="Object_17"
									castShadow
									receiveShadow
									geometry={nodes.Object_17.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Bonet_7" position={[-0.404, 0.434, -0.001]}>
								<mesh
									name="Object_19"
									castShadow
									receiveShadow
									geometry={nodes.Object_19.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Bumper_F_8" position={[-0.975, 0.151, 0]}>
								<mesh
									name="Object_21"
									castShadow
									receiveShadow
									geometry={nodes.Object_21.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Bootlid_9" position={[0.779, 0.442, -0.001]}>
								<mesh
									name="Object_23"
									castShadow
									receiveShadow
									geometry={nodes.Object_23.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Bumper_R_10" position={[1.072, 0.177, 0]}>
								<mesh
									name="Object_25"
									castShadow
									receiveShadow
									geometry={nodes.Object_25.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Fender_FL_11" position={[-0.569, 0.315, 0.559]}>
								<mesh
									name="Object_27"
									castShadow
									receiveShadow
									geometry={nodes.Object_27.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Doors_FL_12" position={[-0.371, 0.257, 0.574]}>
								<mesh
									name="Object_29"
									castShadow
									receiveShadow
									geometry={nodes.Object_29.geometry}
									material={materials.Body_08}
								/>
								<mesh
									name="Object_30"
									castShadow
									receiveShadow
									geometry={nodes.Object_30.geometry}
									material={materials.BodyGlass_08}
								/>
							</group>
							<group name="Wheel_RL_13" position={[0.628, 0.166, 0.489]}>
								<mesh
									name="Object_32"
									castShadow
									receiveShadow
									geometry={nodes.Object_32.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Wheel_FR_14" position={[-0.603, 0.164, -0.489]}>
								<mesh
									name="Object_34"
									castShadow
									receiveShadow
									geometry={nodes.Object_34.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Wheel_RR_15" position={[0.628, 0.163, -0.489]}>
								<mesh
									name="Object_36"
									castShadow
									receiveShadow
									geometry={nodes.Object_36.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="TurnSignal_FL_16" position={[-0.966, 0.173, 0.452]}>
								<mesh
									name="Object_38"
									castShadow
									receiveShadow
									geometry={nodes.Object_38.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Headlights_FL_17" position={[-0.933, 0.305, 0.369]}>
								<mesh
									name="Object_40"
									castShadow
									receiveShadow
									geometry={nodes.Object_40.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Arm_FL_18" position={[-0.601, 0.155, 0.221]}>
								<mesh
									name="Object_42"
									castShadow
									receiveShadow
									geometry={nodes.Object_42.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Axle_RL_19" position={[0.628, 0.15, 0]}>
								<mesh
									name="Object_44"
									castShadow
									receiveShadow
									geometry={nodes.Object_44.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Lights_RL_20" position={[1.055, 0.304, 0.412]}>
								<mesh
									name="Object_46"
									castShadow
									receiveShadow
									geometry={nodes.Object_46.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Lights_RR_21" position={[1.055, 0.303, -0.413]}>
								<mesh
									name="Object_48"
									castShadow
									receiveShadow
									geometry={nodes.Object_48.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Axle_RR_22" position={[0.628, 0.15, 0]}>
								<mesh
									name="Object_50"
									castShadow
									receiveShadow
									geometry={nodes.Object_50.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Arm_FR_23" position={[-0.601, 0.155, -0.222]}>
								<mesh
									name="Object_52"
									castShadow
									receiveShadow
									geometry={nodes.Object_52.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Fan_24" position={[-0.849, 0.212, 0.002]}>
								<mesh
									name="Object_54"
									castShadow
									receiveShadow
									geometry={nodes.Object_54.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Grill_F_25" position={[0.07, 0.182, 0]}>
								<mesh
									name="Object_56"
									castShadow
									receiveShadow
									geometry={nodes.Object_56.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="TurnSignal_FR_26" position={[-0.966, 0.173, -0.452]}>
								<mesh
									name="Object_58"
									castShadow
									receiveShadow
									geometry={nodes.Object_58.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Doors_FR_27" position={[-0.371, 0.256, -0.575]}>
								<mesh
									name="Object_60"
									castShadow
									receiveShadow
									geometry={nodes.Object_60.geometry}
									material={materials.Body_08}
								/>
								<mesh
									name="Object_61"
									castShadow
									receiveShadow
									geometry={nodes.Object_61.geometry}
									material={materials.BodyGlass_08}
								/>
							</group>
							<group name="Headlights_FR_28" position={[-0.933, 0.305, -0.369]}>
								<mesh
									name="Object_63"
									castShadow
									receiveShadow
									geometry={nodes.Object_63.geometry}
									material={materials.Body_08}
								/>
							</group>
							<group name="Fender_FR_29" position={[-0.569, 0.315, -0.559]}>
								<mesh
									name="Object_65"
									castShadow
									receiveShadow
									geometry={nodes.Object_65.geometry}
									material={materials.Body_08}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload(car);

import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

function App() {
	return (
		<div id="canvas-container">
			<Canvas style={{ backgroundColor: "#3f3f3f" }} camera={{ position: [5, 3, 5], fov: 60 }} shadows>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;

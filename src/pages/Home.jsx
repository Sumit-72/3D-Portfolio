import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/volcano";
// import Island from "../models/Island.jsx";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setcurrentStage] = useState(1);
  const [islandRotation, setIslandRotation] = useState(1.1);

  // const adjustIslandForScreenSize =() =>{
  //     let screenScale=null;
  //     let screenposition= [0,-6.5,-43];
  //     let rotation=[0.1,4.7,0];

  //     if(window.innerWidth <768){
  //         screenScale=[0.9,0.9,0.9];
  //     }else{
  //         screenScale=[1.1,1.1,1.1];
  //     }

  //     return [screenScale,screenposition,rotation];
  // }

  function handleClick() {
    const newStage=(currentStage)%4+1;
    setcurrentStage(newStage);

    let newRotation;
    switch (newStage) {
      case 1:
        newRotation = 1.1; // Rotation value for stage 1
        break;
      case 3:
        newRotation = 2.6; // Rotation value for stage 2
        break;
      case 4:
        newRotation = 4; // Rotation value for stage 3
        break;
      case 2:
        newRotation = 0; // Rotation value for stage 4
        break;
      default:
        newRotation = islandRotation; // Default rotation, if needed
    }
    setIslandRotation(newRotation);

  }

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenposition = [0, -7, -40];
    let rotation = [-Math.PI / 2.2, 0, 0.9];

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
    } else {
      screenScale = [0.35, 0.35, 0.35];
    }

    return [screenScale, screenposition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenposition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenposition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenposition = [0, -4, -4];
    }

    return [screenScale, screenposition];
  };

  const [islandScale, islandPosition, islandrotation] =
    adjustIslandForScreenSize();
    
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, fav: 75, position: [0, 0, 5] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.1} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#00000"
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandrotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setcurrentStage}
            targetRotation={islandRotation}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <button
        onClick={handleClick}
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-green-400 px-4 py-2 rounded"
      >Next
      </button>
    </section>
  );
};

export default Home;

import MyBook from '../../libro';
import { Html } from '@react-three/drei';
const BubbleMesh = () =>{
     return (
        <mesh position={[0,0,0]} >
            <sphereGeometry />
            <meshStandardMaterial color='hotpink' transparent />
            <Html distanceFactor={1} center occlude >
                <MyBook />
            </Html>
        </mesh>
     )
}

export default BubbleMesh;
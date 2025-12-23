/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';

const FIELD_SIZE = 4; // 🔑 tamaño visual del campo (ajústalo)

const AntigravityInner = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 11,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = '.primary',
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10
}) => {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  /* Mouse global */
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const virtualMouse = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * FIELD_SIZE;
      const y = (Math.random() - 0.5) * FIELD_SIZE;
      const z = (Math.random() - 0.5) * 20;

      temp.push({
        t: Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        mx: x,
        my: y,
        mz: z,
        cx: x,
        cy: y,
        cz: z,
        randomRadiusOffset: (Math.random() - 0.5) * 2
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    /* 🔑 mouse escalado a campo LOCAL */
    const destX = mouse.current.x * FIELD_SIZE;
    const destY = mouse.current.y * FIELD_SIZE;

    virtualMouse.current.x += (destX - virtualMouse.current.x) * 0.05;
    virtualMouse.current.y += (destY - virtualMouse.current.y) * 0.05;

    const targetX = virtualMouse.current.x;
    const targetY = virtualMouse.current.y;

    const globalRotation = state.clock.getElapsedTime() * rotationSpeed;

    particles.forEach((p, i) => {
      p.t += p.speed;

      const dx = p.mx - targetX;
      const dy = p.my - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetPos = { x: p.mx, y: p.my, z: p.mz * depthFactor };

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRotation;
        const wave =
          Math.sin(p.t * waveSpeed + angle) * (0.5 * waveAmplitude);

        const currentRingRadius =
          ringRadius + wave + p.randomRadiusOffset;

        targetPos.x =
          targetX + currentRingRadius * Math.cos(angle);
        targetPos.y =
          targetY + currentRingRadius * Math.sin(angle);
        targetPos.z =
          p.mz * depthFactor +
          Math.sin(p.t) * waveAmplitude * depthFactor;
      }

      p.cx += (targetPos.x - p.cx) * lerpSpeed;
      p.cy += (targetPos.y - p.cy) * lerpSpeed;
      p.cz += (targetPos.z - p.cz) * lerpSpeed;

      dummy.position.set(p.cx, p.cy, p.cz);
      dummy.lookAt(targetX, targetY, p.cz);
      dummy.rotateX(Math.PI / 2);

      const distFromRing = Math.abs(dist - ringRadius);
      let scaleFactor = 1 - distFromRing / 10;
      scaleFactor = Math.max(0, Math.min(1, scaleFactor));

      const finalScale =
        scaleFactor *
        (0.8 + Math.sin(p.t * pulseSpeed) * 0.2 * particleVariance) *
        particleSize;

      dummy.scale.set(finalScale, finalScale, finalScale);
      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {particleShape === 'capsule' && (
        <capsuleGeometry args={[0.1, 0.4, 4, 8]} />
      )}
      {particleShape === 'sphere' && (
        <sphereGeometry args={[0.2, 16, 16]} />
      )}
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
};

const Antigravity = (props) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 35 }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
};

export default Antigravity;

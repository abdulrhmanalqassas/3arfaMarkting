import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image as PartnerImage, ScrollControls, useScroll, Billboard } from "@react-three/drei";
import { easing } from "maath";
import { UAParser } from "ua-parser-js";
import { campaignImages } from "@/shared/campaign-images";

function isMobileDevice() {
  const parser = new UAParser();
  const deviceType = parser.getDevice().type;

  const isMobile = deviceType === "mobile" || deviceType === "tablet";

  return isMobile;
}

const sceneImages = Array.from({ length: 4 }, () => campaignImages).flat();

export default function PartnerScene() {
  const [isTouchpad, setIsTouchpad] = useState(false);

  useEffect(() => {
    const handleTouchpad = (e) => {
      if (Math.abs(e.deltaY) < 10) {
        setIsTouchpad(true);
      } else {
        setIsTouchpad(false);
      }
    };
    window.addEventListener("wheel", handleTouchpad);
    return () => window.removeEventListener("wheel", handleTouchpad);
  }, []);

  const isHorizontal = isTouchpad || isMobileDevice();
  return (
      <Canvas
        dpr={[1, 1.5]}
        role="img"
        aria-label="Interactive preview of Arafa Agency's outdoor advertising campaigns"
        style={{
          height: "50vh",
          borderRadius: "10px",
          boxShadow:
            "1px 8px 12px rgba(0, 0, 0, 0.4), 1px 2px 6px rgba(255, 255, 0, 0.5)",
        }}
      >
        <ScrollControls
          style={{
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none",
          }}
          pages={4}
          distance={1}
          infinite={true}
          horizontal={isHorizontal}
        >
          <Scene position={[0, 1.5, 1]} />
        </ScrollControls>
      </Canvas>
  );
}

function Scene(props) {
  const ref = useRef();
  const scroll = useScroll();
  const [hovered, hover] = useState(null);

  useFrame((state, delta) => {
    const scrollX = scroll.offset;

    // Rotate contents
    state.events.update?.(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);

    ref.current.rotation.y = -scrollX * (Math.PI * 2);
  });
  return (
    <group ref={ref} {...props}>
      <Cards
        from={360}
        len={Math.PI * 2.2}
        position={[0, -0.4, 0]}
        onPointerOver={hover}
        onPointerOut={hover}
      />
      <ActiveCard hovered={hovered} />
    </group>
  );
}

function Cards({
  from = 0,
  len = Math.PI * 2,
  radius = 5,
  onPointerOver,
  onPointerOut,
  ...props
}) {
  const [hovered, hover] = useState(null);
  const amount = sceneImages.length;
  const textPosition = from + (amount / 2 / amount) * len;
  return (
    <group {...props}>
      <Billboard
        position={[
          Math.sin(textPosition) * radius * 1.4,
          0.5,
          Math.cos(textPosition) * radius * 1.4,
        ]}
        castShadow
      ></Billboard>
      {Array.from(
        { length: amount - 3 /* minus 3 images at the end, creates a gap */ },
        (_, i) => {
          const angle = from + (i / amount) * len;
          return (
            <Card
              key={angle}
              onPointerOver={(e) => (
                e.stopPropagation(), hover(i), onPointerOver(i)
              )}
              onPointerOut={() => (hover(null), onPointerOut(null))}
              position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
              rotation={[0, Math.PI / 2 + angle, 0]}
              active={hovered !== null}
              hovered={hovered === i}
              url={sceneImages[i].src}
            />
          );
        }
      )}
    </group>
  );
}

function Card({ url, active, hovered, ...props }) {
  const ref = useRef();
  useFrame((state, delta) => {
    const f = hovered ? 1.4 : active ? 1.25 : 1;
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta);
    easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta);
  });
  return (
    <group {...props}>
      <PartnerImage
        ref={ref}
        transparent
        radius={0.075}
        url={url}
        scale={[1.618, 1, 1]}
        side={THREE.DoubleSide}
      />
    </group>
  );
}

function ActiveCard({ hovered, ...props }) {
  const ref = useRef();

  useLayoutEffect(() => {
    if (ref.current?.material) {
      return void (ref.current.material.zoom = 0.8);
    }
  }, [hovered]);

  useFrame((state, delta) => {
    if (ref.current?.material) {
      easing.damp(ref.current.material, "zoom", 0.4, 0.5, delta);
      easing.damp(ref.current.material, "opacity", 0.9, 0.5, delta);
    }
  });

  const isHovered = hovered !== null;
  return (
    <Billboard {...props}>
      {isHovered && (
        <PartnerImage
          ref={ref}
          transparent
          radius={0.3}
          position={[0, 1.5, 0]}
          scale={[9, 1.618 * 3.5, 0.2, 1]}
          url={sceneImages[hovered].src}
        />
      )}
    </Billboard>
  );
}


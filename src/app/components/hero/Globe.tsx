"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { LocationInfo } from "./LocationInfo";

const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredMarker, setHoveredMarker] = useState<THREE.Mesh | null>(null); // Track the hovered marker
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Position of the tooltip

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x0a0a0a, 0);
    container.appendChild(renderer.domElement);

    // Earth
    const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    const earthTexture = new THREE.TextureLoader().load("/earth-texture.jpg");
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: earthTexture,
      bumpScale: 0.1,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Markers (Example locations: New York and Tokyo)
    const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x18bd76 });

    // New York coordinates (approximately)
    const marker1 = new THREE.Mesh(markerGeometry, markerMaterial);
    marker1.name = "NY";
    const lat1 = 40.7128;
    const lon1 = -74.006;
    setMarkerPosition(marker1, lat1, lon1, 5.1);
    scene.add(marker1);

    // Tokyo coordinates (approximately)
    const marker2 = new THREE.Mesh(markerGeometry, markerMaterial);
    marker2.name = "EC";
    const lat2 = -3.325904;
    const lon2 = -79.805666;
    setMarkerPosition(marker2, lat2, lon2, 5.1);
    scene.add(marker2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 10;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;

    // Raycaster to detect mouse position
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const markers = [marker1, marker2];
    function onPointerMove(event: PointerEvent) {
      const rect = container.getBoundingClientRect();
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components

      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // update the picking ray with the camera and pointer position
      raycaster.setFromCamera(pointer, camera);

      // calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(markers);
      if (intersects.length > 0) {
        // Marker is hovered, set hovered marker and tooltip position
        setHoveredMarker(intersects[0].object as THREE.Mesh);
        const intersectedMarker = intersects[0].object as THREE.Mesh;
        console.log(intersectedMarker);
        // Project the 3D position of the marker to 2D screen coordinates
        const vector = new THREE.Vector3();
        intersectedMarker.getWorldPosition(vector);
        vector.project(camera);

        // Convert from normalized device coordinates to screen coordinates
        const x = ((vector.x + 1) / 2) * container.clientWidth;
        const y = (-(vector.y - 1) / 2) * container.clientHeight;

        // Adjust the tooltip position slightly above the marker
        setTooltipPosition({ x, y: y - 20 });
      } else {
        setHoveredMarker(null);
      }
    }

    window.addEventListener("pointermove", onPointerMove);

    // Animation loop (only for controls updates)
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Helper function to convert lat/lon to 3D coordinates
  function setMarkerPosition(
    marker: THREE.Mesh,
    lat: number,
    lon: number,
    radius: number
  ) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    marker.position.x = -radius * Math.sin(phi) * Math.cos(theta);
    marker.position.y = radius * Math.cos(phi);
    marker.position.z = radius * Math.sin(phi) * Math.sin(theta);
  }

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="w-full h-[250px] sm:h-[350px] lg:h-[450px]"
      />

      {/* Display Tooltip if a marker is hovered */}
      {hoveredMarker && (
        <LocationInfo
          topPosition={tooltipPosition.y}
          leftPosition={tooltipPosition.x}
          location={hoveredMarker.name}
        />
      )}
    </div>
  );
};

export default Globe;

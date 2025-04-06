
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  color?: string;
  density?: number;
  speed?: number;
  type?: 'stars' | 'particles' | 'waves';
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  color = '#ffffff',
  density = 1500,
  speed = 0.0005,
  type = 'stars'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create geometries based on type
    let particles: THREE.Points;
    
    if (type === 'stars') {
      // Star field
      const starGeometry = new THREE.BufferGeometry();
      const starCount = density;
      const posArray = new Float32Array(starCount * 3);
      
      for (let i = 0; i < starCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10; // Spread stars in a larger area
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const starMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      particles = new THREE.Points(starGeometry, starMaterial);
      scene.add(particles);
    } else if (type === 'particles') {
      // Particle system
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = density;
      
      const positions = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        scales[i] = Math.random();
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      
      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
    } else if (type === 'waves') {
      // Wave animation
      const planeGeometry = new THREE.PlaneGeometry(15, 15, 100, 100);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      planeMesh.rotation.x = -Math.PI / 2 + 0.3;
      planeMesh.position.y = -2;
      scene.add(planeMesh);
      
      // Create dummy particles for consistent animation code
      const dummyGeometry = new THREE.BufferGeometry();
      const dummyMaterial = new THREE.PointsMaterial();
      particles = new THREE.Points(dummyGeometry, dummyMaterial);
      
      // Wave animation function
      const animateWaves = () => {
        const positions = planeGeometry.attributes.position;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          
          // Create wave effect
          const xOffset = Math.sin(x * 0.5 + time) * 0.5;
          const yOffset = Math.cos(y * 0.5 + time) * 0.5;
          positions.setZ(i, xOffset + yOffset);
        }
        
        positions.needsUpdate = true;
      };
      
      // Store the animation function to call it in the main animate loop
      (planeMesh as any).customAnimation = animateWaves;
    }
    
    camera.position.z = 5;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (type === 'stars' || type === 'particles') {
        particles.rotation.x += speed;
        particles.rotation.y += speed * 0.5;
      } else if (type === 'waves') {
        // Call the wave animation function
        const planeMesh = scene.children.find(child => child instanceof THREE.Mesh);
        if (planeMesh && (planeMesh as any).customAnimation) {
          (planeMesh as any).customAnimation();
        }
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      scene.clear();
      renderer.dispose();
    };
  }, [color, density, speed, type]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none -z-10" 
      style={{ opacity: 0.8 }}
    />
  );
};

export default ThreeBackground;

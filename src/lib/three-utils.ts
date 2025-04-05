
// This file provides utility functions for three.js that use ES modules instead of CommonJS
import * as THREE from 'three';

export const loadTexture = (url: string): Promise<THREE.Texture> => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => resolve(texture),
      undefined,
      (error) => reject(error)
    );
  });
};

export const createShaderMaterial = (vertexShader: string, fragmentShader: string, uniforms: THREE.Uniform): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
  });
};

export const createBasicScene = (): {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
} => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  return { scene, camera, renderer };
};

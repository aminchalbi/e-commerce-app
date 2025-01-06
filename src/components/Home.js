import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../Style/Home.css';

function Home() {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Initialisation de la scène Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Vérifiez si sceneRef.current existe avant d'ajouter le DOM
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    // Ajout de lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Création des atomes (sphères)
    const atomGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const atomMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const atoms = [];

    for (let i = 0; i < 10; i++) {
      const atom = new THREE.Mesh(atomGeometry, atomMaterial);
      atom.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      atoms.push(atom);
      scene.add(atom);
    }

    // Animation des atomes
    const animate = () => {
      requestAnimationFrame(animate);

      atoms.forEach((atom, index) => {
        atom.position.x += Math.sin(Date.now() * 0.001 + index) * 0.01;
        atom.position.y += Math.cos(Date.now() * 0.001 + index) * 0.01;
        atom.rotation.x += 0.01;
        atom.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    camera.position.z = 5;
    animate();

    // Nettoyage
    return () => {
      // Vérifiez si sceneRef.current existe avant de supprimer l'élément
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="home">
      {/* Arrière-plan avec des atomes dynamiques */}
      <div className="background" ref={sceneRef}></div>

      {/* Carte avec titre et description */}
      <div className="card">
        <h1 className="title">Bienvenue sur E-Shop</h1>
        <p className="description">
          Découvrez notre plateforme e-commerce dédiée aux produits IT. Profitez d’une large sélection de produits de qualité au meilleur prix.
        </p>
        <a href="/shop" className="shop-button">
          <i className="fas fa-shopping-cart"></i> Shop Now
        </a>
      </div>
    </div>
  );
}

export default Home;

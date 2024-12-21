<template>
  <div class="wormhole-container"></div>
</template>

<script>
import { onMounted } from "vue";
import * as THREE from "three";

export default {
  name: "SpaceBackground",
  setup() {
    onMounted(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      document
        .querySelector(".wormhole-container")
        ?.appendChild(renderer.domElement);

      const particleCount = 3000;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 900;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
        positions[i * 3 + 2] = Math.random() * -300;

        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      }

      particles.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        sizeAttenuation: true,
        vertexColors: true,
      });

      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      camera.position.z = 10;

      let mouseX = 0;
      let mouseY = 0;

      function onMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      }

      document.addEventListener("mousemove", onMouseMove);

      function animate() {
        requestAnimationFrame(animate);

        for (let i = 0; i < particleCount; i++) {
          const zPosition =
            particleSystem.geometry.attributes.position.array[i * 3 + 2];
          particleSystem.geometry.attributes.position.array[i * 3 + 2] =
            zPosition + 0.05;
          // logique souris
          particleSystem.geometry.attributes.position.array[i * 3] +=
            (Math.random() - 0.5) * 0.02 + mouseX * 0.05;
          particleSystem.geometry.attributes.position.array[i * 3 + 1] +=
            (Math.random() - 0.5) * 0.02 + mouseY * 0.05;

          if (zPosition > camera.position.z) {
            particleSystem.geometry.attributes.position.array[i * 3 + 2] =
              Math.random() * -300;
          }
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      }

      animate();

      // Reset des positions toutes les 20 secondes
      setInterval(() => {
        for (let i = 0; i < particleCount; i++) {
          particleSystem.geometry.attributes.position.array[i * 3 + 2] =
            Math.random() * -300;
          particleSystem.geometry.attributes.position.array[i * 3] =
            (Math.random() - 0.5) * 900; // X: entre -150 et 150
          particleSystem.geometry.attributes.position.array[i * 3 + 1] =
            (Math.random() - 0.5) * 300; // Y: entre -150 et 150
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
      }, 40000);

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    });
  },
};
</script>

<style scoped>
.wormhole-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
}
</style>

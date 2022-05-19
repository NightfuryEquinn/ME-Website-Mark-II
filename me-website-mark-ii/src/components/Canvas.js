import { useEffect } from 'react'
import * as THREE from 'three'

const Canvas = () => 
{
    useEffect(() => 
    {
        /**
         * Three.js Codes
         */
        // Get Canvas ID
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Objects
         */
        // Material
        const material = new THREE.MeshNormalMaterial({
            flatShading: true
        })

        // Meshes
        const planet = new THREE.Mesh(
            new THREE.DodecahedronGeometry(1.5, 1),
            material
        )

        const moon = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.25, 0),
            material
        )
        
        // Planet Position
        planet.position.x = 0
        planet.position.y = 0

        // Moon Orbit Position
        moon.position.x = planet.position.x + 2
        moon.position.y = planet.position.y + 2

        scene.add(planet, moon)

        /**
         * Particles
         */
        // Geometry
        const particleCount = 3000
        const positions = new Float32Array(particleCount * 3)

        for(let i = 0; i < particleCount; i++)
        {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 20
            positions[i * 3 + 1] = 4 * (0.5 - Math.random()) * 5
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20
        }

        const particleGeometry = new THREE.BufferGeometry()
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        // Material
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x8EFBFA,
            sizeAttenuation: true,
            size: 0.025,
            depthWrite: false
        })

        // Points
        const particle = new THREE.Points(particleGeometry, particleMaterial)
        scene.add(particle)
        
        /**
         * Sizes
         */
        const sizes = 
        {
            width: window.innerWidth,
            height: window.innerHeight
        }

        /**
         * Camera Group
         */
        // Group
        const cameraGroup = new THREE.Group()
        scene.add(cameraGroup)

        // Base Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1 ,100)
        camera.position.z = 6
        cameraGroup.add(camera)

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer(
            {
                canvas: canvas,
                alpha: true
            }
        )
        
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Resizing
         */
        window.addEventListener('resize', () => 
        {
            // Update on Resize
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
    
            // Update Camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
    
            // Update Renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Cursor
         */
        const cursor = {}
        cursor.x = 0
        cursor.y = 0

        window.addEventListener('mousemove', (event) =>
        {
            cursor.x = event.clientX / sizes.width - 0.5
            cursor.y = event.clientY / sizes.height - 0.5
        })

        /**
         * Animate & Clock
         */
        const clock = new THREE.Clock()
        let previousTime = 0

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            // Animate Planet
            planet.rotation.x += deltaTime * 0.1
            planet.rotation.y += deltaTime * 0.15

            // Animate Moon
            const moonAngle = elapsedTime * 0.15
            moon.position.x = Math.cos(moonAngle) * 2.5
            moon.position.z = Math.sin(moonAngle) * 2.5
            moon.position.y = Math.cos(moonAngle) * 1.5

            moon.rotation.x += - deltaTime * 0.35
            moon.rotation.y += - deltaTime * 0.25

            // Animate Camera
            const parallaxX = cursor.x * 0.5
            const parallaxY = - cursor.y * 0.5

            cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
            cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

            // Animate Particles
            const particleAngle = elapsedTime * 0.025
            particle.rotation.x = Math.cos(particleAngle)
            particle.rotation.y = Math.sin(particleAngle)

            // Renderer
            renderer.render(scene, camera)

            // Call per tick per frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }, [])

    return(
        <>
            <div className="m-0 p-0 overflow-hidden bg-backblue"> 
                <div className="fixed top-0 left-0 outline-0">
                    <canvas className="webgl"></canvas>
                </div>
            </div>
        </>
    )
}

export default Canvas;
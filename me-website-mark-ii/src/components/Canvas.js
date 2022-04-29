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
         * Sizes
         */
        const sizes = 
        {
            width: window.innerWidth,
            height: window.innerHeight
        }

        /**
         * Camera
         */
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1 ,100)
        camera.position.z = 3
        scene.add(camera)

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer(
            {
                canvas: canvas
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
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            // Renderer
            renderer.render(scene, camera)

            // Call per tick per frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }, [])

    return(
        <div className="fixed top-0 left-0 outline-0">
            <canvas className="webgl"></canvas>
        </div>
    )
}

export default Canvas;
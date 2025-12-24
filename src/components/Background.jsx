import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;

        // Configuration
        const dotColor = 'rgb(93, 238, 235)'; // Brand Cyan #5deeeb
        const spacing = 10; // Even higher density (was 18)
        // Calculate frequency based on width to keep the wave "scale" consistent on mobile
        // On desktop (1920), 0.003 gives ~1 wave. On mobile (390), we need ~0.015
        let waveFrequency = 0.003;
        let waveSpeed = 0.00005; // Make it mutable
        let maxOpacity = 0.15; // Default for desktop (increased from 0.08)

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Adjust frequency inversely to width
            // Base it on a standard 1920px desktop
            const scaleFactor = 1920 / width;
            waveFrequency = 0.003 * scaleFactor;
            // Cap it so it doesn't get too crazy on very small screens
            waveFrequency = Math.min(waveFrequency, 0.02);

            // Adjust speed proportionally to frequency to maintain constant visual speed
            // If frequency is 5x higher, speed needs to be 5x higher
            waveSpeed = 0.00005 * scaleFactor;

            // Adjust opacity for mobile
            // Mobile screens often need higher contrast to be visible against ambient light
            if (width < 768) {
                maxOpacity = 0.3; // Significantly brighter for mobile
            } else {
                maxOpacity = 0.15; // Slightly brighter for desktop
            }
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height);

            const cols = Math.ceil(width / spacing);
            const rows = Math.ceil(height / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;

                    // Calculate wave effect
                    // Use "Domain Warping" to create wavy lines instead of interference blobs
                    // Base diagonal wave phase
                    const phase = (x + y) * waveFrequency + time * waveSpeed;

                    // Distort the phase with a secondary sine wave to make the lines "wavy"
                    // This creates a flowing river effect rather than geometric interference
                    const distortion = Math.sin(x * waveFrequency * 3 + time * waveSpeed * 2) * 0.5;

                    // Calculate final wave value
                    const value = Math.sin(phase + distortion);

                    // Opacity
                    // Normalize from -1..1 to 0..1
                    const normalized = (value + 1) / 2;

                    // Very soft, linear opacity to avoid hot spots
                    // Only show the "crests" of the waves
                    const opacity = Math.pow(normalized, 2) * maxOpacity; // Use dynamic maxOpacity

                    if (opacity < 0.01) continue; // Skip invisible dots

                    const size = Math.max(0.2, normalized * 1.1); // Smaller dots (max 1.1px)

                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(93, 238, 235, ${opacity})`;
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(() => draw(Date.now()));
        };

        // Event Listeners
        window.addEventListener('resize', resizeCanvas);

        // Init
        resizeCanvas();
        draw(Date.now());

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

export default Background;

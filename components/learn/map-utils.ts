export interface Point {
    x: number;
    y: number;
}

export const MAP_WIDTH = 600; // SVG canvas width
export const LEVEL_HEIGHT = 120; // Vertical distance between units
export const AMPLITUDE = 150; // How wide the path waves (x-axis)
export const VERTICAL_OFFSET = 50; // Initial padding

/**
 * Generates points for a sine-wave path based on the number of units.
 * Returns an SVG path string and an array of coordinate points for the nodes.
 */
export const generateMapPath = (totalUnits: number) => {
    const points: Point[] = [];
    const pathPoints: Point[] = [];

    // Total height based on units
    const totalHeight = totalUnits * LEVEL_HEIGHT + VERTICAL_OFFSET * 2;

    // Generate node positions (zig-zag / sine wave)
    for (let i = 0; i < totalUnits; i++) {
        // Invert index so Unit 1 is at the bottom visually (if rendered bottom-up) 
        // OR keep standard top-down. Let's do bottom-up for "climbing" feel.
        // Actually, web pages scroll down. Let's start at top? 
        // Most games (Duolingo) scroll standard, but path goes "forward".
        // Let's stick to standard top-to-down scrolling for web usability.

        const y = i * LEVEL_HEIGHT + VERTICAL_OFFSET;

        // Sine wave for X: Center (300) +/- Amplitude
        // We want a nice curve. Math.sin takes radians.
        // i * 0.8 gives a good wave frequency.
        const x = MAP_WIDTH / 2 + Math.sin(i * 0.8) * AMPLITUDE;

        points.push({ x, y });
    }

    // Generate smooth SVG path through these points
    // We'll generate intermediate points for smoothness using quadratic bezier logic or just high-res sine
    let pathString = `M ${points[0].x} ${points[0].y}`;

    // Simple line to next point? Too jagged.
    // Let's recalculate the path with higher resolution for the SVG line itself
    const segments = totalUnits * 10;
    let svgPathD = "";

    for (let i = 0; i <= segments; i++) {
        const progress = i / 10; // 0, 0.1, 0.2 ...
        const y = progress * LEVEL_HEIGHT + VERTICAL_OFFSET;
        const x = MAP_WIDTH / 2 + Math.sin(progress * 0.8) * AMPLITUDE;

        if (i === 0) {
            svgPathD += `M ${x} ${y}`;
        } else {
            svgPathD += ` L ${x} ${y}`;
        }
    }

    return { points, svgPathD, totalHeight };
};

export const getUnitColor = (index: number) => {
    // Zones based on index
    if (index < 5) return "from-amber-400 to-orange-500"; // Sunny
    if (index < 10) return "from-emerald-400 to-sky-500"; // Forest
    if (index < 15) return "from-indigo-400 to-purple-600"; // Mystic
    return "from-rose-400 to-fuchsia-600"; // Magma
};

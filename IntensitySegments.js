/**
 * IntensitySegments class for managing intensity values over specified ranges.
 *
 * This class allows you to:
 * - Add a specified amount of intensity over a range of integer values.
 * - Set a specific intensity value over a range of integer values.
 * - Retrieve a string representation of the current intensity segments.
 *
 * All intensity values are initialized to 0, and the range can extend from
 * negative infinity to positive infinity. The class ensures that invalid
 * ranges (e.g., where 'from' is greater than 'to') are handled appropriately.
 *
 * Example Usage:
 * const segments = new IntensitySegments();
 * segments.add(1, 5, 10); // Increases intensity from 1 to 5 by 10
 * segments.set(3, 4, 5);  // Sets intensity from 3 to 4 to 5
 * console.log(segments.toString()); // Outputs the current intensity segments
 *
 * Author: L
 * Date: 2024-10-10
 * Version: 1.0.0
 */
export class IntensitySegments {
    constructor() {
        // Using Map to store intensity values for each point
        this.segments = new Map();
    }

    /**
     * Increases intensity in the specified range
     * @param {number} from - Starting point (must be an integer)
     * @param {number} to - Ending point (must be an integer, >= from)
     * @param {number} amount - Amount to increase (can be negative)
     */
    add(from, to, amount) {
        if (!Number.isInteger(from) || !Number.isInteger(to) || from > to) {
            throw new Error("Invalid range: 'from' must be <= 'to' and both must be integers.");
        }
        for (let i = from; i <= to; i++) {
            this.segments.set(i, (this.segments.get(i) || 0) + amount);
        }
    }

    /**
     * Sets intensity in the specified range
     * @param {number} from - Starting point (must be an integer)
     * @param {number} to - Ending point (must be an integer, >= from)
     * @param {number} amount - Amount to set
     */
    set(from, to, amount) {
        if (!Number.isInteger(from) || !Number.isInteger(to) || from > to) {
            throw new Error("Invalid range: 'from' must be <= 'to' and both must be integers.");
        }
        for (let i = from; i <= to; i++) {
            this.segments.set(i, amount);
        }
    }

    /**
     * Returns a string representation of the current intensity segments
     * @returns {string} - String representation of intensity segments
     */
    toString() {
        // Get and sort all the keys of intensity points
        const sortedKeys = Array.from(this.segments.keys()).sort((a, b) => a - b);
        // Convert each key-value pair to a string format
        return sortedKeys.map(key => `${key}: ${this.segments.get(key)}`).join(', ');
    }
}

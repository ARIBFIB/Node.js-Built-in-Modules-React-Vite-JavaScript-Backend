import assert from 'assert';
import { sum } from './sum.mjs';


export function check() {
    try {
        assert.strictEqual(sum(1, 2), 4);
        return 'Test passed'; 
    } catch (error) {
        console.error('Test failed:', error);
        return 'Test failed';
    }
}
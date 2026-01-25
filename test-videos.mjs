// Test script to verify videos data
import { frA1Videos, getVideoForUnit } from './lib/videos.js';

const checkUnits = [311, 312, 313, 314, 315, 316];

console.log('=== Checking frA1Videos array ===');
checkUnits.forEach(id => {
    const video = frA1Videos.find(v => v.unitId === id);
    console.log(`Unit ${id}: ${video ? 'FOUND - ' + video.title : 'NOT FOUND'}`);
});

console.log('\n=== Testing getVideoForUnit function ===');
checkUnits.forEach(id => {
    const video = getVideoForUnit(id);
    console.log(`Unit ${id}: ${video ? 'FOUND - ' + video.title : 'NOT FOUND'}`);
});

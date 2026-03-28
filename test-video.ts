import { getVideoForUnit } from './lib/videos';

const unitId = 331;
const video = getVideoForUnit(unitId);

if (video) {
    console.log("SUCCESS: Video found!");
    console.log(JSON.stringify(video, null, 2));
} else {
    console.log("FAILURE: Video NOT found for unitId " + unitId);
}

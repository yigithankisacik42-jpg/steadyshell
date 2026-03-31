import { UnitReading } from './readings';
import { enA1ReadingsPart1 } from './readings-en-a1-part1';
import { enA1ReadingsPart2 } from './readings-en-a1-part2';
import { enA1ReadingsPart3 } from './readings-en-a1-part3';

const allEnA1Readings: { [key: number]: UnitReading } = {
    ...enA1ReadingsPart1,
    ...enA1ReadingsPart2,
    ...enA1ReadingsPart3
};

export function getEnA1ReadingForUnit(unitId: number): UnitReading | undefined {
    return allEnA1Readings[unitId];
}

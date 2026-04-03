import { Question } from './questions';
import { allB2Questions } from './questions/en-b2';

/**
 * SteadyShell Questions Database - English B2 (Modular Wrapper)
 * Units 191-220
 */

type B2QuestionData = {
    [unitId: number]: {
        [quizIndex: number]: Question[];
    };
};

export const b2Questions: B2QuestionData = allB2Questions;

"use client";

import { useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { findUnitById, getLessonIdForUnit, type LessonType } from "@/lib/curriculum";

type MarkOptions = {
    quizIndex?: number;
};

export function useLessonProgress(unitId: number) {
    const { progress, updateProgress, currentLanguage } = useLanguage();

    const markLessonCompleted = useCallback(
        (lessonType: LessonType, options?: MarkOptions) => {
            if (!unitId) return;

            const unitInfo = findUnitById(unitId);
            const langCode = unitInfo?.langCode || currentLanguage.code;
            const lessonId = getLessonIdForUnit(unitId, lessonType, options?.quizIndex);
            if (!lessonId) return;

            const current = progress[langCode]?.completedLessons || [];
            if (current.includes(lessonId)) return;

            updateProgress(langCode, {
                completedLessons: [...current, lessonId],
            });
        },
        [unitId, progress, updateProgress, currentLanguage.code]
    );

    return { markLessonCompleted };
}

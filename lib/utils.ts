import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {subjectsColors} from "@/constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getSubjectColor = (subject: string) => {
    return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
    // const voiceId = voices[voice as keyof typeof voices][
    //     style as keyof (typeof voices)[keyof typeof voices]
    //     ] || "sarah";

    return  {
        name: "Companion",
        firstMessage:
            "Привет, давай начнем обучение",
        transcriber: {
            provider: "azure",
            // model: "chatgpt-4o-latest",
            language: "ru-RU",
        },
        voice: {
            provider: "openai",
            model: "tts-1",
            voiceId: "nova",
            // stability: 0.4,
            // similarityBoost: 0.8,
            // speed: 1,
            // style: 0.5,
            // useSpeakerBoost: true,
        },
        model: {
            provider: "openai",
            model: "chatgpt-4o-latest",
            messages: [
                {
                    role: "system",
                    content: `Ты — опытный фронтенд разработчик, уровень - senior, который ведёт голосовой урок в реальном времени со студентом. 
                        Твоя задача — объяснить тему {{ topic }} по предмету {{ subject }}.
                        
                        Правила:
                        - Придерживайся заданной темы и предмета.
                        - Разбивай материал на маленькие части.
                        - Убедись, что ученик понимает тебя.
                        - Поддерживай стиль общения: {{ style }}.
                        - Отвечай доступно, как в настоящем разговоре.
                        - Не используй спецсимволов — это голосовой чат.`,
                },
            ],
        },
        clientMessages: [],
        serverMessages: [],
    };
    // return vapiAssistant;
};

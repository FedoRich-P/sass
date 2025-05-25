import React from 'react'
import CompanionCard from "@/components/Companion/CompanionCard";
import { CompanionsList } from '@/components/Companion/CompanionsList';
import CTA from '@/components/CTA';
import {recentSessions} from "@/constants";

const items = [
    {
        id: "1",
        name: "Intro to React",
        topic: "Frontend",
        subject: "JavaScript",
        duration: 45,
        color: "#61dafb",
        bookmarked: true,
    },
    {
        id: "2",
        name: "Data Structures",
        topic: "Computer Science",
        subject: "Algorithms",
        duration: 60,
        color: "#ff6b6b",
        bookmarked: false,
    },
    {
        id: "3",
        name: "Machine Learning Basics",
        topic: "AI",
        subject: "Python",
        duration: 90,
        color: "#4caf50",
        bookmarked: true,
    },
];

const Page = () => {
    return <main>
        <h1>Popular Companions</h1>
        <section className={'home-section'}>
            {items.map((item) => (
                <CompanionCard key={item.id} {...item} />
            ))}
        </section>
        <section className={'flex w-full flex-col xl:flex-row justify-between gap-10'}>
            <CompanionsList title={'Recently completed sessions'} companions={recentSessions}/>
            <CTA/>
        </section>
    </main>
}

export default Page
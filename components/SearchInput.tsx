'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

export default function SearchInput() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState("");

    const paramsString = searchParams.toString();

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: paramsString,
                    key: "topic",
                    value: searchQuery,
                });
                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === "/companions") {
                    const newUrl = removeKeysFromUrlQuery({
                        params: paramsString,
                        keysToRemove: ["topic"],
                    });
                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500);

        return () => clearTimeout(handler);
    }, [searchQuery, router, paramsString, pathname]);

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit overflow-hidden">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                placeholder="Search companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

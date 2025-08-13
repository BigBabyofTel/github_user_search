'use client';

import { Button } from "@/components/ui/button";
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { SearchBoxProps } from '@/app/types';

// The search icon is together with the input
export default function SearchBox({ onSearchAction }: SearchBoxProps) {
    const [username, setUsername] = useState<string>('');

    function handleSearch() {
        onSearchAction(username);
    }

    return (
        <section className="w-11/12 p-2 border rounded-lg shadow-xl flex justify-between h-fit mx-auto bg-accent">
            <section className=" w-1/2 flex items-center">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search GitHub profiles..."
                    className="border-none outline-none ml-1"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                />
            </section>
            <Button
                className="border p-2 rounded-2xl bg-blue-500 text-white"
                variant="ghost"
                onClick={handleSearch}
                disabled={!username.trim()}
            >
                Search
            </Button>
        </section>
    );
}

'use client';

import SearchBox from '@/app/components/SearchBox';
import {ModeToggle} from "@/app/components/mode-toggle";
import { useState } from 'react';
import { GitHubUser } from './types';
import DisplayBox from "@/app/components/DisplayBox";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);

  console.log(userData);

  async function handleSearch(username: string) {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        return new Error(response.status === 404 ? 'User not found' : 'Failed to fetch user');
      }

      const data: GitHubUser = await response.json();
      //set user data
      setUserData(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
      console.log(error);
    } finally {
      setLoading(false);
    }

    return;
  }

  return (
      <div className="">
        <header className="w-11/12 mx-auto py-[32px] flex justify-between items-center">
          <h1 className="text-[26px]">Dev Finder</h1>
          <section className="h-full flex justify-between">
            {/* add a switch that will change the text */}

            <ModeToggle />
          </section>
        </header>
        <SearchBox onSearchAction={handleSearch} />
        <DisplayBox loading={loading} userData={userData} />
      </div>
  );
}

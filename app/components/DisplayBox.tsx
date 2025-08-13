'use client';

import { GitHubUser } from '@/app/types';
import Image from 'next/image';
import { MapPin, BriefcaseBusiness, LucideX, Link } from "lucide-react";

interface DisplayBoxProps {
    loading: boolean;
    userData: GitHubUser | null;
}

export default function DisplayBox({ loading, userData }: DisplayBoxProps) {
    const newDate = (date: string) => {
        const oldDate = new Date(date);
        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC', // Crucial for UTC dates
        }).format(oldDate);
    };

    return (
        <div className="border w-11/12 my-5 h-fit mx-auto rounded-lg shadow-xl p-2 bg-accent ">
            <div className="flex flex-col">
                {/* Section with the data added */}

                {loading && <p>Loading...</p>}

                {userData && (
                    <div className="">
                        <section className="flex items-center p-4">
                            <Image
                                src={userData.avatar_url!}
                                width={100}
                                height={100}
                                alt="Avatar"
                                className="rounded-full"
                            />
                            <div className="flex flex-col ml-2">
                                <h1 className="text-3xl">{userData.login}</h1>
                                <h2 className="text-blue-600 text-lg font-semibold">@{userData.name}</h2>
                                <p className="text-lg text-slate-600 font-bold">
                                    Joined {newDate(userData.created_at)}
                                </p>
                            </div>
                        </section>
                        <p className="p-4">{userData.bio}</p>
                        <section className="p-4  rounded-lg flex flex-col items-start justify-items-start bg-background">
                            <p className="p-2 ">Repos</p>
                            <span className="text-2xl font-bold p-2"> {userData.public_repos}</span>
                            <p className="p-2 ">Followers</p>
                            <span className="text-2xl font-bold p-2">{userData.followers}</span>
                            <p className="p-2 ">Following</p>
                            <span className="text-2xl font-bold p-2">{userData.following}</span>
                        </section>
                        <div className="p-2">
                            <section className="flex items-center p-2">
                                <LucideX />
                                <p className="p-2">
                                    {userData.twitter_username ? userData.twitter_username : 'Not Available'}
                                </p>
                            </section>
                            <section className="flex items-center p-2">
                                <BriefcaseBusiness />
                                <p className="p-2">{userData.company ? userData.company : 'Not Available'}</p>
                            </section>
                            <section className="flex items-center p-2">
                                <MapPin />
                                <p className="p-2">{userData.location ? userData.location : 'Not Available'}</p>
                            </section>
                            <section className="flex items-center p-2">
                                <Link />
                                <p className="p-2">{userData.html_url ? userData.html_url : 'Not Available'} </p>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

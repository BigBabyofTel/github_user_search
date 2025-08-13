export interface SearchBoxProps {
    onSearchAction: (username: string) => void;
}

export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

/*
export interface UserData {
  user: GitHubUser;
  setUser: (user: GitHubUser) => void;
}
*/
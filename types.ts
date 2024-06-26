// src/types/types.ts
export type Icon = 'home' | 'create' | 'friends' | 'play' | 'rewards' | 'google' | 'facebook' | 'apple';

export interface SignUpFormProps {
  email: string,
  password: string,
  username: string
}

export interface UserData {
  accountId: string;
  email: string;
  username: string;
  avatar: string;
}


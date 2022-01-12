export interface SignUpResult {
  accessToken: string;
  expiresIn: number;
}

export interface SignInResult extends SignUpResult {}

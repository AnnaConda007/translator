export enum EmailError {
  INVALID_EMAIL = "Firebase: Error (auth/invalid-email).",
  ALREADY_IN_USE = "Firebase: Error (auth/email-already-in-use).",
}

export enum PasswordError {
  WEAK_PASSWORD = "Firebase: Password should be at least 6 characters (auth/weak-password).",
  TO_MACH_REGUESTS = "Firebase: Error (auth/too-many-requests)"
}

export enum signInErrorMessage {
  INVALID_LOGIN_PASSWORD = "Firebase: Error (auth/invalid-login-credentials).",
  TO_MANY_ATTEMPT = "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).",
}


export enum UserData {
  USER_ID = "userId",
}


export enum AuthType {
  SIGN_IN = "signIn",
  SIGN_UP = "signUp"
}

export enum EmailError {
  INVALID_EMAIL = "Firebase: Error (auth/invalid-email).",
  ALREADY_IN_USE = "Firebase: Error (auth/email-already-in-use).",
}

export enum PasswordError {
  WEAK_PASSWORD = "Firebase: Password should be at least 6 characters (auth/weak-password).",
  TO_MACH_REGUESTS = "Firebase: Error (auth/too-many-requests)"

}
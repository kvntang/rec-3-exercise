import { NotAllowedError } from "./errors";

export interface UserDoc {
  username: string;
}

/**
 * concept: Authenticating, except without any authentication yet :)
 */
export default class AuthenticatingConcept {
  // Store users in an array for now
  public readonly users: UserDoc[] = [
    { username: "testuser" },
    { username: "alice" },
  ];

  /**
   * Make an instance of Authenticating.
   */
  constructor() {
  }

  register(username: string) {
    this.assertUsernameAvailable(username);
    this.users.push({ username });
  }

  assertUsernameAvailable(username: string) {
    if (this.users.find((user) => user.username === username) !== undefined) {
      throw new NotAllowedError("Username already taken!");
    }
  }

  // TODO: Write "authentication" code that makes sure the username exists
  assertRegistered1(username: string): boolean {
    const user = this.users.find((user) => user.username === username);
    if (user === undefined) {
      throw new NotAllowedError("User is not registered!");
    }
    return true;
  }

  assertRegistered2(username: string) {
    if (this.users.filter((user) => user.username === username).length === 0) {
      throw new NotAllowedError(`User ${username} is not registered!`);
    }
  }
}

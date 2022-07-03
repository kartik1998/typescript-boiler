import User from '../models/user';

class Application {
  private userStore: UserStore;
  constructor() {
    this.userStore = new UserStore();
  }

  saveUser(name: string, age: number, id: number) {
    return this.userStore.saveUser(new User(name, age, id));
  }

  fetchUserViaId(id: string) {
    return JSON.stringify(this.userStore.fetchUserViaId(id));
  }

  registry() {
    return {
      save_user: 'saveUser',
      get_user_by_id: 'fetchUserViaId',
    };
  }
}

class UserStore {
  private users: Array<User>;
  constructor() {
    this.users = [];
  }

  saveUser(user: User): boolean {
    for (const u of this.users) {
      if (u.id === user.id) return false;
    }
    this.users.push(user);
    return true;
  }

  fetchUserViaId(id: string): User | null {
    for (const u of this.users) {
      if (u.id == id) return u;
    }
    return null;
  }
}

export default Application;

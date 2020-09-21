import { DataSource, DataSourceConfig } from 'apollo-datasource';

import { Context } from './index';

type User = {
  id: number;
  name: string;
  username: string;
  password: string;
  age: number;
};

const users: User[] = [
  {
    id: 1,
    name: 'Ben',
    username: 'username1',
    password: 'password1',
    age: 28,
  },
];

export class UserRepository extends DataSource<Context>{
  private context: Context

  public initialize(config: DataSourceConfig<Context>) {
    this.context = config.context;
  }

  public getUser(): User | null {
    console.log('contreee:::', this.context)
    return users.find(u => u.id === this.context.userId) || null;
  }

  public login(username: string, password: string): string | null {
    const user = users.find(u => u.username === username && u.password === password);
    if(!user) return null;

    return Buffer.from(`${user.id}`).toString('base64');
  }
}
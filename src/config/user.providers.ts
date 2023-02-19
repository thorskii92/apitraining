import { DataSource } from 'typeorm';
import { userlist } from './user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(userlist),
    inject: ['DATA_SOURCE'],
  },
];
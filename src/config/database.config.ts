import { DataSource } from 'typeorm';
import { userlist } from './user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'sa',
        password: 'rootpass123',
        database: 'wildb',
        entities: [userlist],
        synchronize: true,
      });

      console.log(__dirname + '/*.entity{.ts,.js}')

      const init = await dataSource.initialize();
      console.log(init)
      return init;
    },
  },
];
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // AppModule 에서 global 로 설정되어있기 때문에 이렇게 inject 가 가능합니다.
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const appEnv = configService.get<string>('APP_ENV');

        const databaseHostFor = configService.get<string>('MYSQL_HOST') || 'localhost';
        const databasePortFor = configService.get<string>('MYSQL_PORT') || '3308';
        const databaseUserFor = configService.get<string>('MYSQL_ID') || 'root';
        const databaseUserPasswordFor = configService.get<string>('MYSQL_PASS') || '';
        const databaseName = 'graphql_overview_db';

        const isDevelopment = appEnv === 'dev';

        return {
          // dbms 유형
          type: 'mysql',
          debug: false,
          logging: isDevelopment ? ['error', 'warn'] : ['info'],
          // TODO timezone (Asia/Seoul) 을 아래처럼 offset (+09:00) 으로 변경할 수 있는지 확인해보자.
          timezone: '+09:00',
          host: databaseHostFor,
          port: Number.parseInt(databasePortFor, 10),
          username: databaseUserFor,
          password: databaseUserPasswordFor,
          database: databaseName,
          extra: {
            // The maximum number of connections to create at once. (Default: 10)
            // TODO 이게 적용되는지 확인해봐야합니다.
            connectionLimit: 10,
          },
        };
      },
    }),
  ],
})
export class DatabaseModule {}

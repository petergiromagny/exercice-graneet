import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'db_graneet',
      synchronize: false,
      entities: ['dist/**/**.entity.js'],
    }),
    CityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

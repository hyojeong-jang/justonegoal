import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [], // 사용할 entity의 클래스명
      synchronize: true, // false로 해두는 게 안전
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

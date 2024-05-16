import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import { SheetModule } from './sheet/sheet.module';
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.NESTJS_PRAC1,
      // entities: [Board], // Board entity 사용하기 위해 추가
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Board entity 사용하기 위해 추가
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Board entity 사용하기 위해 추가
      // synchronize: true, // 배포 환경에서는 false 사용
      logging: true,
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    SheetModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

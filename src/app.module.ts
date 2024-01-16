import { Module } from '@nestjs/common';
import { CalculatorModule } from './calculator/calculator.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      synchronize: true,
      models: [],
    }),
    CalculatorModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

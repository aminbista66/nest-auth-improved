import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: 'APP_GUARD',
    useClass: JwtAuthGuard
  }
  ],
})
export class AppModule {}

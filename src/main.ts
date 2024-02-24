import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // session user serializer
  // app.use(
  //   session({
  //     name: 'NEST_SESSION',
  //     secret: 'sarcasm',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       maxAge: 3600000,
  //       secure: false,
  //     },
  //   })
  // )
  // app.use(passport.initialize())
  // app.use(passport.session())
  await app.listen(3000);
}
bootstrap();

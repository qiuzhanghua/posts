import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaModule, UsersModule],
  providers: [AuthService],
})
export class AuthModule {}

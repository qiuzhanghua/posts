import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}

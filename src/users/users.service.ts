import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(dto: UserCreateInput) {
    return this.prisma.user.create({ data: dto });
  }

  listAll() {
    return this.prisma.user.findMany();
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
}

// console.log(email);
// return { id: '1', email: 'qiu@abc.com', password: 'pass', name: 'q' };

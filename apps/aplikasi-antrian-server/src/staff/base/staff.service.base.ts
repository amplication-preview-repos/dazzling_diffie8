/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Staff as PrismaStaff,
  Service as PrismaService,
} from "@prisma/client";

export class StaffServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StaffCountArgs, "select">): Promise<number> {
    return this.prisma.staff.count(args);
  }

  async staffItems(args: Prisma.StaffFindManyArgs): Promise<PrismaStaff[]> {
    return this.prisma.staff.findMany(args);
  }
  async staff(args: Prisma.StaffFindUniqueArgs): Promise<PrismaStaff | null> {
    return this.prisma.staff.findUnique(args);
  }
  async createStaff(args: Prisma.StaffCreateArgs): Promise<PrismaStaff> {
    return this.prisma.staff.create(args);
  }
  async updateStaff(args: Prisma.StaffUpdateArgs): Promise<PrismaStaff> {
    return this.prisma.staff.update(args);
  }
  async deleteStaff(args: Prisma.StaffDeleteArgs): Promise<PrismaStaff> {
    return this.prisma.staff.delete(args);
  }

  async getService(parentId: string): Promise<PrismaService | null> {
    return this.prisma.staff
      .findUnique({
        where: { id: parentId },
      })
      .service();
  }
}

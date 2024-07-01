import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OfficeServiceBase } from "./base/office.service.base";

@Injectable()
export class OfficeService extends OfficeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

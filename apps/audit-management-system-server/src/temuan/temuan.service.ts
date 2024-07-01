import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemuanServiceBase } from "./base/temuan.service.base";

@Injectable()
export class TemuanService extends TemuanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

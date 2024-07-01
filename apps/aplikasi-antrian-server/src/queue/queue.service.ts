import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueServiceBase } from "./base/queue.service.base";

@Injectable()
export class QueueService extends QueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

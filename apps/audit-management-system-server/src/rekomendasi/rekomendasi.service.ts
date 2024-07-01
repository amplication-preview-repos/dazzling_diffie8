import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RekomendasiServiceBase } from "./base/rekomendasi.service.base";

@Injectable()
export class RekomendasiService extends RekomendasiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

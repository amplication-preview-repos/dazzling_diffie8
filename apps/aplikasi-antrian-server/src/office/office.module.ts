import { Module } from "@nestjs/common";
import { OfficeModuleBase } from "./base/office.module.base";
import { OfficeService } from "./office.service";
import { OfficeController } from "./office.controller";
import { OfficeResolver } from "./office.resolver";

@Module({
  imports: [OfficeModuleBase],
  controllers: [OfficeController],
  providers: [OfficeService, OfficeResolver],
  exports: [OfficeService],
})
export class OfficeModule {}

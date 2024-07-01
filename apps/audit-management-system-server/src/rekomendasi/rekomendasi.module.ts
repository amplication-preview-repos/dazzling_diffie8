import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RekomendasiModuleBase } from "./base/rekomendasi.module.base";
import { RekomendasiService } from "./rekomendasi.service";
import { RekomendasiController } from "./rekomendasi.controller";
import { RekomendasiResolver } from "./rekomendasi.resolver";

@Module({
  imports: [RekomendasiModuleBase, forwardRef(() => AuthModule)],
  controllers: [RekomendasiController],
  providers: [RekomendasiService, RekomendasiResolver],
  exports: [RekomendasiService],
})
export class RekomendasiModule {}

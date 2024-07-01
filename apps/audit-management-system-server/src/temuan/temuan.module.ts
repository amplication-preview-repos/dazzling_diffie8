import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TemuanModuleBase } from "./base/temuan.module.base";
import { TemuanService } from "./temuan.service";
import { TemuanController } from "./temuan.controller";
import { TemuanResolver } from "./temuan.resolver";

@Module({
  imports: [TemuanModuleBase, forwardRef(() => AuthModule)],
  controllers: [TemuanController],
  providers: [TemuanService, TemuanResolver],
  exports: [TemuanService],
})
export class TemuanModule {}

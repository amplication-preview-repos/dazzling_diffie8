import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TemuanService } from "./temuan.service";
import { TemuanControllerBase } from "./base/temuan.controller.base";

@swagger.ApiTags("temuans")
@common.Controller("temuans")
export class TemuanController extends TemuanControllerBase {
  constructor(
    protected readonly service: TemuanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

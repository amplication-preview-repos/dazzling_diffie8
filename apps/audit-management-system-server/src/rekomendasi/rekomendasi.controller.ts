import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RekomendasiService } from "./rekomendasi.service";
import { RekomendasiControllerBase } from "./base/rekomendasi.controller.base";

@swagger.ApiTags("rekomendasis")
@common.Controller("rekomendasis")
export class RekomendasiController extends RekomendasiControllerBase {
  constructor(
    protected readonly service: RekomendasiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

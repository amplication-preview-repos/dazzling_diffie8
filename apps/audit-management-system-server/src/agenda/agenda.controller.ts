import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AgendaService } from "./agenda.service";
import { AgendaControllerBase } from "./base/agenda.controller.base";

@swagger.ApiTags("agenda")
@common.Controller("agenda")
export class AgendaController extends AgendaControllerBase {
  constructor(
    protected readonly service: AgendaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DashboardService } from "./dashboard.service";

@swagger.ApiTags("dashboards")
@common.Controller("dashboards")
export class DashboardController {
  constructor(protected readonly service: DashboardService) {}

  @common.Post("/approve/close-temuan")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApproveCloseTemuan(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.ApproveCloseTemuan(body);
      }

  @common.Post("/approve/input-temuan")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApproveInputTemuan(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.ApproveInputTemuan(body);
      }

  @common.Post("/export/excel")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExportFindingsToExcel(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ExportFindingsToExcel(body);
      }

  @common.Post("/export/pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExportFindingsToPdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ExportFindingsToPdf(body);
      }
}

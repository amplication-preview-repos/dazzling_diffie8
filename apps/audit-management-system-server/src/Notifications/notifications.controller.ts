import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationsService } from "./notifications.service";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationsController {
  constructor(protected readonly service: NotificationsService) {}

  @common.Post("/notifications/overdue")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendOverdueCommitmentsNotification(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.SendOverdueCommitmentsNotification(body);
      }
}

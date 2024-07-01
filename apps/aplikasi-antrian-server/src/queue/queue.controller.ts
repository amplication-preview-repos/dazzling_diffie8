import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueService } from "./queue.service";
import { QueueControllerBase } from "./base/queue.controller.base";

@swagger.ApiTags("queues")
@common.Controller("queues")
export class QueueController extends QueueControllerBase {
  constructor(protected readonly service: QueueService) {
    super(service);
  }
}

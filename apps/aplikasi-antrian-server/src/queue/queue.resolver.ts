import * as graphql from "@nestjs/graphql";
import { QueueResolverBase } from "./base/queue.resolver.base";
import { Queue } from "./base/Queue";
import { QueueService } from "./queue.service";

@graphql.Resolver(() => Queue)
export class QueueResolver extends QueueResolverBase {
  constructor(protected readonly service: QueueService) {
    super(service);
  }
}

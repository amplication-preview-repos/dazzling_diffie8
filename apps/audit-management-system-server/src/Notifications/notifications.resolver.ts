import * as graphql from "@nestjs/graphql";
import { NotificationsService } from "./notifications.service";

export class NotificationsResolver {
  constructor(protected readonly service: NotificationsService) {}

  @graphql.Mutation(() => Boolean)
  async SendOverdueCommitmentsNotification(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.SendOverdueCommitmentsNotification(args);
  }
}

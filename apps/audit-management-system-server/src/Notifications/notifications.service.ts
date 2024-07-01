import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsService {
  constructor() {}
  async SendOverdueCommitmentsNotification(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}

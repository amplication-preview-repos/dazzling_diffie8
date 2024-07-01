import * as graphql from "@nestjs/graphql";
import { DashboardService } from "./dashboard.service";

export class DashboardResolver {
  constructor(protected readonly service: DashboardService) {}

  @graphql.Mutation(() => Boolean)
  async ApproveCloseTemuan(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.ApproveCloseTemuan(args);
  }

  @graphql.Mutation(() => Boolean)
  async ApproveInputTemuan(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.ApproveInputTemuan(args);
  }

  @graphql.Mutation(() => String)
  async ExportFindingsToExcel(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExportFindingsToExcel(args);
  }

  @graphql.Mutation(() => String)
  async ExportFindingsToPdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExportFindingsToPdf(args);
  }
}

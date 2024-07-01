import { Injectable } from "@nestjs/common";

@Injectable()
export class DashboardService {
  constructor() {}
  async ApproveCloseTemuan(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async ApproveInputTemuan(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async ExportFindingsToExcel(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ExportFindingsToPdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

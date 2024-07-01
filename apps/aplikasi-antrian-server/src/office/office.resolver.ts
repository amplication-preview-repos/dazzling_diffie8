import * as graphql from "@nestjs/graphql";
import { OfficeResolverBase } from "./base/office.resolver.base";
import { Office } from "./base/Office";
import { OfficeService } from "./office.service";

@graphql.Resolver(() => Office)
export class OfficeResolver extends OfficeResolverBase {
  constructor(protected readonly service: OfficeService) {
    super(service);
  }
}

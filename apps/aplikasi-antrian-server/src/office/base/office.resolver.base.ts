/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Office } from "./Office";
import { OfficeCountArgs } from "./OfficeCountArgs";
import { OfficeFindManyArgs } from "./OfficeFindManyArgs";
import { OfficeFindUniqueArgs } from "./OfficeFindUniqueArgs";
import { CreateOfficeArgs } from "./CreateOfficeArgs";
import { UpdateOfficeArgs } from "./UpdateOfficeArgs";
import { DeleteOfficeArgs } from "./DeleteOfficeArgs";
import { ServiceFindManyArgs } from "../../service/base/ServiceFindManyArgs";
import { Service } from "../../service/base/Service";
import { OfficeService } from "../office.service";
@graphql.Resolver(() => Office)
export class OfficeResolverBase {
  constructor(protected readonly service: OfficeService) {}

  async _officesMeta(
    @graphql.Args() args: OfficeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Office])
  async offices(@graphql.Args() args: OfficeFindManyArgs): Promise<Office[]> {
    return this.service.offices(args);
  }

  @graphql.Query(() => Office, { nullable: true })
  async office(
    @graphql.Args() args: OfficeFindUniqueArgs
  ): Promise<Office | null> {
    const result = await this.service.office(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Office)
  async createOffice(@graphql.Args() args: CreateOfficeArgs): Promise<Office> {
    return await this.service.createOffice({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Office)
  async updateOffice(
    @graphql.Args() args: UpdateOfficeArgs
  ): Promise<Office | null> {
    try {
      return await this.service.updateOffice({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Office)
  async deleteOffice(
    @graphql.Args() args: DeleteOfficeArgs
  ): Promise<Office | null> {
    try {
      return await this.service.deleteOffice(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Service], { name: "services" })
  async findServices(
    @graphql.Parent() parent: Office,
    @graphql.Args() args: ServiceFindManyArgs
  ): Promise<Service[]> {
    const results = await this.service.findServices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}

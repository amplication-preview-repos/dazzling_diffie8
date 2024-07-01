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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Temuan } from "./Temuan";
import { TemuanCountArgs } from "./TemuanCountArgs";
import { TemuanFindManyArgs } from "./TemuanFindManyArgs";
import { TemuanFindUniqueArgs } from "./TemuanFindUniqueArgs";
import { CreateTemuanArgs } from "./CreateTemuanArgs";
import { UpdateTemuanArgs } from "./UpdateTemuanArgs";
import { DeleteTemuanArgs } from "./DeleteTemuanArgs";
import { RekomendasiFindManyArgs } from "../../rekomendasi/base/RekomendasiFindManyArgs";
import { Rekomendasi } from "../../rekomendasi/base/Rekomendasi";
import { TemuanService } from "../temuan.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Temuan)
export class TemuanResolverBase {
  constructor(
    protected readonly service: TemuanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "read",
    possession: "any",
  })
  async _temuansMeta(
    @graphql.Args() args: TemuanCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Temuan])
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "read",
    possession: "any",
  })
  async temuans(@graphql.Args() args: TemuanFindManyArgs): Promise<Temuan[]> {
    return this.service.temuans(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Temuan, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "read",
    possession: "own",
  })
  async temuan(
    @graphql.Args() args: TemuanFindUniqueArgs
  ): Promise<Temuan | null> {
    const result = await this.service.temuan(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Temuan)
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "create",
    possession: "any",
  })
  async createTemuan(@graphql.Args() args: CreateTemuanArgs): Promise<Temuan> {
    return await this.service.createTemuan({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Temuan)
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "update",
    possession: "any",
  })
  async updateTemuan(
    @graphql.Args() args: UpdateTemuanArgs
  ): Promise<Temuan | null> {
    try {
      return await this.service.updateTemuan({
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

  @graphql.Mutation(() => Temuan)
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "delete",
    possession: "any",
  })
  async deleteTemuan(
    @graphql.Args() args: DeleteTemuanArgs
  ): Promise<Temuan | null> {
    try {
      return await this.service.deleteTemuan(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Rekomendasi], { name: "rekomendasis" })
  @nestAccessControl.UseRoles({
    resource: "Rekomendasi",
    action: "read",
    possession: "any",
  })
  async findRekomendasis(
    @graphql.Parent() parent: Temuan,
    @graphql.Args() args: RekomendasiFindManyArgs
  ): Promise<Rekomendasi[]> {
    const results = await this.service.findRekomendasis(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}

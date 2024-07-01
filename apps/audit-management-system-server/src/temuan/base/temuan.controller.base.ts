/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TemuanService } from "../temuan.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TemuanCreateInput } from "./TemuanCreateInput";
import { Temuan } from "./Temuan";
import { TemuanFindManyArgs } from "./TemuanFindManyArgs";
import { TemuanWhereUniqueInput } from "./TemuanWhereUniqueInput";
import { TemuanUpdateInput } from "./TemuanUpdateInput";
import { RekomendasiFindManyArgs } from "../../rekomendasi/base/RekomendasiFindManyArgs";
import { Rekomendasi } from "../../rekomendasi/base/Rekomendasi";
import { RekomendasiWhereUniqueInput } from "../../rekomendasi/base/RekomendasiWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TemuanControllerBase {
  constructor(
    protected readonly service: TemuanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Temuan })
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTemuan(@common.Body() data: TemuanCreateInput): Promise<Temuan> {
    return await this.service.createTemuan({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Temuan] })
  @ApiNestedQuery(TemuanFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async temuans(@common.Req() request: Request): Promise<Temuan[]> {
    const args = plainToClass(TemuanFindManyArgs, request.query);
    return this.service.temuans({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Temuan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async temuan(
    @common.Param() params: TemuanWhereUniqueInput
  ): Promise<Temuan | null> {
    const result = await this.service.temuan({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Temuan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTemuan(
    @common.Param() params: TemuanWhereUniqueInput,
    @common.Body() data: TemuanUpdateInput
  ): Promise<Temuan | null> {
    try {
      return await this.service.updateTemuan({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Temuan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTemuan(
    @common.Param() params: TemuanWhereUniqueInput
  ): Promise<Temuan | null> {
    try {
      return await this.service.deleteTemuan({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/rekomendasis")
  @ApiNestedQuery(RekomendasiFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rekomendasi",
    action: "read",
    possession: "any",
  })
  async findRekomendasis(
    @common.Req() request: Request,
    @common.Param() params: TemuanWhereUniqueInput
  ): Promise<Rekomendasi[]> {
    const query = plainToClass(RekomendasiFindManyArgs, request.query);
    const results = await this.service.findRekomendasis(params.id, {
      ...query,
      select: {
        commitment: true,
        createdAt: true,
        explanation: true,
        id: true,
        recommendation: true,

        temuan: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rekomendasis")
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "update",
    possession: "any",
  })
  async connectRekomendasis(
    @common.Param() params: TemuanWhereUniqueInput,
    @common.Body() body: RekomendasiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rekomendasis: {
        connect: body,
      },
    };
    await this.service.updateTemuan({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rekomendasis")
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "update",
    possession: "any",
  })
  async updateRekomendasis(
    @common.Param() params: TemuanWhereUniqueInput,
    @common.Body() body: RekomendasiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rekomendasis: {
        set: body,
      },
    };
    await this.service.updateTemuan({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rekomendasis")
  @nestAccessControl.UseRoles({
    resource: "Temuan",
    action: "update",
    possession: "any",
  })
  async disconnectRekomendasis(
    @common.Param() params: TemuanWhereUniqueInput,
    @common.Body() body: RekomendasiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rekomendasis: {
        disconnect: body,
      },
    };
    await this.service.updateTemuan({
      where: params,
      data,
      select: { id: true },
    });
  }
}
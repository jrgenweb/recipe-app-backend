import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CuisinesService } from "./cuisines.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { IsString, MinLength } from "class-validator";

class CreateCuisinDto {
  @IsString()
  @MinLength(1)
  name: string;
}

@Controller("cuisines")
export class CuisinesController {
  constructor(private cuisines: CuisinesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateCuisinDto) {
    return this.cuisines.create(dto.name);
  }

  @Get()
  findAll(@Query("skip") skip?: string, @Query("take") take?: string) {
    return this.cuisines.findAll(
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 50,
    );
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cuisines.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() dto: CreateCuisinDto) {
    return this.cuisines.update(id, dto.name);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.cuisines.remove(id);
  }
}

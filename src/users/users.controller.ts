import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller("users")
export class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Query("skip") skip?: string, @Query("take") take?: string) {
    return this.users.findAll(
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 20
    );
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.users.findById(id);
  }
}

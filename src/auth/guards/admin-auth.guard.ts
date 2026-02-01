import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // feltételezzük, hogy AuthGuard már kitöltötte

    if (!user) {
      throw new ForbiddenException("Nincs jogosultság");
    }

    if (user.role !== "ADMIN") {
      throw new ForbiddenException("Csak adminok férhetnek hozzá");
    }

    return true;
  }
}

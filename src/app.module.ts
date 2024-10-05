import { Module } from "@nestjs/common";
import { AppControoler } from "./app.controller";

@Module({
    controllers:[AppControoler]
})
export class AppModule {}
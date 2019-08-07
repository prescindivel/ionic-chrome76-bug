import { NgModule } from "@angular/core";
import { Logger } from "./logger";
import { LoggerService } from "./logger.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    Logger,
    LoggerService
  ],
})
export class LoggerModule { }

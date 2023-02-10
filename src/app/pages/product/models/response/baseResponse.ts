import { Result } from "./result";
import { Status } from "./status";

export interface BaseResponse {
    status: Status;
    result: Result;
}
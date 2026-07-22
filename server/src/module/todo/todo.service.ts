import type ResponseDto from "../response.dto.js";

interface TodoService {
  processCreate(todoName: string): Promise<ResponseDto<any>>;
  processGetAll(): Promise<ResponseDto<any>>;
  processUpdate(taskId: number): Promise<ResponseDto<any>>;
  processDelete(taskId: number): Promise<ResponseDto<any>>;
}

export type { TodoService };

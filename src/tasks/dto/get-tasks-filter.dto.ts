import { IsEnum, IsOptional, IsString } from 'class-validator';

import { TASKS_STATUS } from '../task.module';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TASKS_STATUS)
  status?: TASKS_STATUS;

  @IsOptional()
  @IsString()
  search?: string;
}

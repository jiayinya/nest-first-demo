import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ description: '任务标题' })
  @IsNotEmpty({ message: '任务标题不能为空' })
  readonly title: string;

  @ApiProperty({ description: '任务详细描述' })
  @IsNotEmpty({ message: '任务详细描述必传' })
  readonly description: string;
}

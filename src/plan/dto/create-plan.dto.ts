import { ApiProperty } from "@nestjs/swagger";

export class CreatePlanDto {
    @ApiProperty({type: String})
    plan: String;

    @ApiProperty({type: Number})
    timeMinutes: Number;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreateDddDto {
    @ApiProperty({type: String})
    origin: String;

    @ApiProperty({type: String})
    destiny: String;

    @ApiProperty({type: Number})
    price: Number;
}

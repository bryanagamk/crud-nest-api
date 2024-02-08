import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateStudentDto {
    public id: number
    @IsNotEmpty()
    public name: string
    @IsNotEmpty()
    public course: string
    @IsEmail()
    public email: string
    public phone: string
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id_student')
  findOne(@Param('id_student') id_student: string) {
    return this.studentsService.findOne(+id_student);
  }

  @Patch(':id_student')
  update(@Param('id_student') id_student: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id_student, updateStudentDto);
  }

  @Delete(':id_student')
  remove(@Param('id_student') id: string) {
    return this.studentsService.remove(+id);
  }
}

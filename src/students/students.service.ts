import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepo.save(createStudentDto)
  }

  async findAll() {
    return await this.studentRepo.find();
  }

  async findOne(id_student: number) {
    return await this.studentRepo.findOne({ where: { id_student } });
  }

  async update(id_student: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepo.findOne({ where: { id_student } });

    const studentUpdated = Object.assign(student, updateStudentDto);

    return await this.studentRepo.save(studentUpdated);
  }

  async remove(id_student: number) {
    return await this.studentRepo.softDelete(id_student)
  }
}

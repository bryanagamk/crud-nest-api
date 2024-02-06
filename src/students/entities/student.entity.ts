import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Student {
    /**
     * id
     * name
     * course
     * email
     * phone
     * created_at
     * updated_at
     * deleted_at
     */
    @PrimaryGeneratedColumn()
    id_student: number;

    @Column('text')
    name: string

    @Column('text')
    course: string

    @Column('text')
    email: string

    @Column('text')
    phone: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}

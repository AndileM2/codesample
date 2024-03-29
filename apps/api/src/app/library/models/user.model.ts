import { Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column({primaryKey: true})
    id: number;

    @Column
    name: string;

    @Column
    age: number;

    @Column
    email: string;

    @Column
    balance: number;
}
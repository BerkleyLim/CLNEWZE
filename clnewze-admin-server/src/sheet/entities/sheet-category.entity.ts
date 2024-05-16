import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'master_menu_sheetmusic'})
export class SheetCategoryEntity {
  @PrimaryColumn()
  smtno: number;
  @Column()
  orderby: number;
  @Column()
  name: string;
  @Column()
  category: string;
}

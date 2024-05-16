import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'sheetmusic' })
export class SheetEntity {
  @PrimaryColumn()
  sno: number;
  @Column()
  artist: string;
  @Column()
  title: string;
  @Column()
  img: string;
  @Column()
  genre: string;
  @Column()
  viewNumber: number;
  @Column()
  releaseDate: string;
  @Column()
  contents: string;
  @Column()
  albumName: string;
  @Column()
  uploadDate: string;
  @Column()
  musicLink: string;
  @Column()
  sheetFile: string;
  @Column()
  uno: number;
}

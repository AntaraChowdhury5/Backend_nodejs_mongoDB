import { ObjectId } from "mongodb";

export class Image {
  public _id: string | ObjectId;
  public imageUrl: string;
  public imageTitle: string;
  public imageDesc:string;
  public uploaded:Date;
    file: any;
}
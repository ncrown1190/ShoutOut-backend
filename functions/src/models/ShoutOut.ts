import { ObjectId } from "mongodb";

export default interface ShoutOut {
  _id?: ObjectId;
  to: string;
  from: string;
  shoutout: string;
}

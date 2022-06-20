import { BaseResponse } from "./BaseResponse";
import { Item } from "./Item";

export interface ProductResponse extends BaseResponse {
  item: Item;
}

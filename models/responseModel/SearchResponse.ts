import { BaseResponse } from "./BaseResponse";
import { Item } from "./Item";

export interface SearchResponse extends BaseResponse {
  categories: string[];
  items: Item[];
}

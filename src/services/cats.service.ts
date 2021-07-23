import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
  getCats(): string {
    return 'Get all cats!';
  }
}

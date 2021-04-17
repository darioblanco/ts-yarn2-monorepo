import { Injectable } from '@nestjs/common';

import { getModuleName } from '@darioblanco/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World from module ${getModuleName()}!`;
  }
}

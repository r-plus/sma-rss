import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<a href="https://github.com/r-plus/sma-rss">SMA-RSS</a>';
  }
}

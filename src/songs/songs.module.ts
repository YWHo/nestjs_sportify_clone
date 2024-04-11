import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

// const mockSongsService = {
//   findAll() {
//     return [{ id: 1, title: 'Lasting lever' }];
//   },
// };

@Module({
  controllers: [SongsController],
  providers: [
    SongsService, // "standard" provider syntax
  ],
  // providers: [
  //   // "useClass" provider syntax
  //   {
  //     provide: SongsService,
  //     useClass: SongsService,
  //   },
  // ],
  // providers: [
  //   // "useValue" provider syntax (allow mock data)
  //   SongsService,
  //   {
  //     provide: SongsService,
  //     useValue: mockSongsService,
  //   },
  // ],
})
export class SongsModule {}

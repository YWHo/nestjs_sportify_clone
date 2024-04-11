import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'fetch a song base on the id';
  }

  @Put(':id')
  update() {
    return 'update a song base on the id';
  }

  @Delete(':id')
  delete() {
    return 'delete a song base on the id';
  }
}

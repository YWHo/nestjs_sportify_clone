import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create a new song endpoint';
  }

  @Get()
  findAll() {
    return 'find all songs endpoint';
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

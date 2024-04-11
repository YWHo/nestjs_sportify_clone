import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './data-transfer-object/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
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

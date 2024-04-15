import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './data-transfer-object/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller({
  // This object is used together with "scope: Scope.TRANSIENT" in songs.service
  path: 'songs',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `This is connection string:\n  `,
      JSON.parse(JSON.stringify(this.connection.CONNECTION_STRING)),
    );
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (err) {
      throw new HttpException(
        'server error ',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: err },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetch song on the based on id ${id} (${typeof id})`;
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

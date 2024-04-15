import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  // Setting scope to transient, will result in no caching,
  // creating new instance of SongsController on every incoming request
  scope: Scope.TRANSIENT,
})
export class SongsService {
  // local db
  // local array
  private readonly songs = [];

  create(song) {
    // Save the song into the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    // Errors comes while fetching the data from DB
    // throw new Error('Error in Db while fetching record');
    return this.songs;
  }
}

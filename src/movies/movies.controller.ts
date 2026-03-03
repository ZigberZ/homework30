import { Controller, Get, Query, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
  
    @Get('all')
    findAll(@Query('year') year?: string, @Query('title') title?: string) {
        return this.moviesService.findAll(year ? Number(year) : undefined, title);
    }

    @Get(':id/reviews')
    findOneWithReviews(@Param('id') id: string) {
    return this.moviesService.findOneWithReviews(id);
  }
  @Get('movie/:movieId')
  findByMovieId(@Param('movieId') movieId: string) {
    return this.moviesService.findByMovieId(movieId);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
    constructor(readonly reviewsService: ReviewsService){

    }
    @Get('movies/:movieId')
    findByMovieId(@Param('movieId') movieId: string) {
        return this.reviewsService.findByMovieId(movieId);
    }

}

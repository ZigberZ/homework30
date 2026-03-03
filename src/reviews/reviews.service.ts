import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}
    async findByMovieId(movieId: string) {
    return await this.prisma.review.findMany({
      where: { movieId },
      include: { user: true, movie: true },
    });
  }
}

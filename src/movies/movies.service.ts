import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

    async findAll(year?: number, title?: string) {
    return await this.prisma.movie.findMany({
      where: {
        year: year ? year : undefined,
        title: title ? { contains: title, mode: 'insensitive' } : undefined,
      },
    });
  }

  async findOneWithReviews(id: string) {
  return this.prisma.movie.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      year: true,
      genre: true,

      reviews: {
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });
}
async findByMovieId(movieId: string) {
    return await this.prisma.review.findMany({
      where: { movieId },
      include: { user: true, movie: true },
    });
  }
}

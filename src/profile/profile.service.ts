import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProfileDto } from './dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfile(createProfileDto: CreateProfileDto) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        email: createProfileDto.email,
      }
    });

    if (profile) {
      return profile;
    }

    return this.prisma.profile.create({
      data: createProfileDto,
    })
  }

  async getProfileById(id: number) {
    // 指定された ID のプロファイルを取得する
    return this.prisma.profile.findUnique({
      // 検索条件を指定する
      where: {
        id, // プロファイルの ID が引数の id と一致するものを検索
      },
      // 関連するデータを含めて取得する
      include: {
        servers: { // プロファイルに関連するサーバーを取得
          include: {
            channels: true, // サーバーに関連するチャンネルも取得
          }
        }
      }
    });
  }
}

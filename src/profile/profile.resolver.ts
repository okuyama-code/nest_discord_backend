import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.type';
import { CreateProfileDto } from './dto';
import { ProfileService } from './profile.service';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from 'src/auth/auth.guard';

// @Resolver デコレータは、このクラスが GraphQL のリゾルバであることを示します
@Resolver()
export class ProfileResolver {
  // プロフィールサービスをコンストラクタで注入
  constructor(private readonly profileService: ProfileService) {}

  // @Mutation デコレータは、このメソッドが GraphQL のミューテーションであることを示します
  // () => Profile は、このミューテーションの戻り値の型が Profile であることを示します
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Profile)
  async createProfile(
    // @Args デコレータは、GraphQL のミューテーションの引数を指定します
    // 'input' は引数の名前、CreateProfileDto は引数の型です
    @Args('input') input: CreateProfileDto,
  ) {
    // profileService の createProfile メソッドを呼び出し、引数 input を渡します
    return this.profileService.createProfile(input);
  }

  // @Query デコレータは、このメソッドが GraphQL のクエリであることを示します
  // () => Profile は、このクエリの戻り値の型が Profile であることを示します。つまり、このクエリは Profile 型のオブジェクトを返すことを期待しています。
  @Query(() => Profile)
  async getProfileById(
    // @Args デコレータは、GraphQL のクエリの引数を指定します
    // 'profileId' は引数の名前、number は引数の型です
    @Args('profileId') profileId: number,
  ) {
    // profileService の getProfileById メソッドを呼び出し、引数 profileId を渡します
    return this.profileService.getProfileById(profileId);
  }
}
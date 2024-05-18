import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';
import { MemberModule } from './member/member.module';
import { ServerModule } from './server/server.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      // // 例えば、'http://localhost:3000/image.jpg' のようなURLで静的ファイルにアクセスできます。
      serveRoot: '/',
    }),

    GraphQLModule.forRootAsync({
      imports: [],
      inject: [],
      driver: ApolloDriver,
      useFactory: async () => {
        return {
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          subscriptions: {},
        }
      }
    }),

    ProfileModule,

    MemberModule,

    ServerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

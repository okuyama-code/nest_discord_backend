import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ServerService } from './server/server.service';
import { ServerResolver } from './server/server.resolver';

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
    })
  ],
  controllers: [AppController],
  providers: [AppService, ServerService, ServerResolver],
})
export class AppModule {}

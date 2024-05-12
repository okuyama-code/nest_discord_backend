import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

// @Injectable デコレータは、このクラスが依存性注入可能であることを示します
@Injectable()
export class GraphqlAuthGuard implements CanActivate {
  // JwtService をコンストラクタで注入
  constructor(private jwtService: JwtService) {}

  // canActivate メソッドは、リクエストが認証されているかどうかを確認します
  async canActivate(context: ExecutionContext) {
    // GraphQL のコンテキストを取得
    const gqlCtx = context.getArgByIndex(2);
    // Express のリクエストオブジェクトを取得
    const request: Request = gqlCtx.req;

    // リクエストヘッダーからトークンを抽出
    const token = this.extractToken(request);

    // トークンが存在しない場合は、UnauthorizedException をスロー
    if (!token) throw new UnauthorizedException('Not authorized!');

    try {
      // JwtService を使用してトークンを検証
      const payload = await this.jwtService.verifyAsync(token, {
        publicKey: process.env.JWT_PUBLIC_KEY,
        algorithms: ['RS256'],
      });

      // 検証されたペイロードをリクエストオブジェクトに追加
      request['profile'] = payload;
    } catch (err) {
      // トークンの検証に失敗した場合は、UnauthorizedException をスロー
      throw new UnauthorizedException('Not authorized!');
    }

    // 認証が成功した場合は、true を返す
    return true;
  }

  // extractToken メソッドは、リクエストヘッダーからトークンを抽出します
  private extractToken(request: Request): string | undefined {
    // Authorization ヘッダーから "Bearer " を削除してトークンを返す
    return request.headers.authorization?.replace('Bearer ', '');
  }
}
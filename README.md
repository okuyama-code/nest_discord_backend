## 起動
```
npm run start:dev
```


## prismaに関すること
docker compose upをした後に
```
npx prisma migrate dev --name init
```

prisma関連の構築の参考ページ
https://docs.nestjs.com/recipes/prisma

##　プロセスID（PID）を切るコマンド
```
sudo lsof -i:5432
sudo kill PID番号
```

実際にデータベース内にテーブルが作成されているのか確認するため、Prisma Studioを以下コマンドで立ち上げます。
カラムなどを確認する
データがはいいてるかも確認できる
```
npx prisma studio
```
自動でPrisma Studioが立ち上がり、作成したデータベースを選択すると、空のテーブルが作成されていることを確認できます。

### ER図確認方法
```
npx prisma generate
```
作成されたSVGファイルをブラウザにドラッグ&ドロップ

参考
https://rit-inc.hatenablog.com/entry/2022/04/11/180722


## GraphQL 編
```
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```
このパッケージを使用すると、画像、CSS ファイル、JavaScript ファイルなどの静的アセットを簡単に配信できます。
```
npm i @nestjs/serve-static
```

```
npm i graphql-upload@^14.0.0
```

参考ドキュメント
https://docs.nestjs.com/graphql/quick-start

http://localhost:3000/graphql

## nestjs コーディング編
### server
```
nest g service server
```
Nest.js の GraphQL リゾルバーは、GraphQL クエリやミューテーションに対して実際のデータを取得、変更、または削除するロジックを定義する場所です。リゾルバーは、GraphQL スキーマで定義されたフィールドに対応しています。
```
 nest g resolver server
```

### profile
```
nest g module profile
```
```
nest g service profile
```
```
nest g resolver  profile
```
profile/dto.tsを作成したタイミングでinstallした
```
 npm i class-validator
```


### member
```
nest g module member
```

### auth
2:30:00 ~ 2:39:40
https://www.youtube.com/watch?app=desktop&v=OsDW_ulfhdY&t=9645s
auth.guard.tsで使用
NestJS の GraphQL 用の認証ガードについて説明します。認証ガードは、GraphQL のリゾルバにアクセスする前に、ユーザーが認証されているかどうかを確認するために使用されます。
```
npm i @nestjs/jwt
```
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
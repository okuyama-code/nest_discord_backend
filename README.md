## 起動
```
npm run start:dev
```


## prismaに関すること
docker compose upをした後に
```
npx prisma migrate dev --name init
```

参考ページ
https://docs.nestjs.com/recipes/prisma

##　プロセスID（PID）を切るコマンド
```
sudo lsof -i:5432
sudo kill PID番号
```
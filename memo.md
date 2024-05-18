## Resolverとは
@Resolver は、NestJS の GraphQL モジュールで使用されるデコレータです。これは、GraphQL のリゾルバ関数を定義するために使用されます。リゾルバ関数は、GraphQL クエリやミューテーションに対して実際のデータを返す役割を持っています。
一方、@Controller は、NestJS の HTTP モジュールで使用されるデコレータで、REST API のエンドポイントを定義するために使用されます。
つまり、@Resolver と @Controller の主な違いは以下の通りです：

@Resolver は GraphQL 用、@Controller は REST 用です。
@Resolver は GraphQL のクエリやミューテーションに対してデータを返すのに対し、@Controller は HTTP リクエスト（GET、POST、PUT、DELETE など）を処理します。
@Resolver ではメソッドに @Query や @Mutation デコレータを使用しますが、@Controller では @Get、@Post、@Put、@Delete などの HTTP メソッドデコレータを使用します。

ただし、両者の役割はともにクライアントからのリクエストを受け取り、適切な応答を返すことです。@Resolver と @Controller は、それぞれ GraphQL と REST という異なる API パラダイムで使用されるという点が主な違いになります。
コード例では、ProfileResolver クラスに @Resolver() デコレータが使用されており、その中で @Mutation(() => Profile) が定義されています。これは、GraphQL のミューテーションを処理するリゾルバ関数を示しています。

### QueryとMutationとは？
データ取得の「query」、データ更新の「mutation」の２種類に分類分けされます。
https://qiita.com/nys9302/items/18962c96c8d111e38d85
Query → SELECT分に使える. RESTでGETと該当
Mutation → INSERT, UPDATE, DELETEに使える。RESTではPOST,PUT,PATCH,DELETEに該当
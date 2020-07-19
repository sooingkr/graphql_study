import { getMovie, getMovies, getSuggestions, deleteMovie } from "./db";

/*
[resolver]
: Query, Mutation에 대한 구체적 행위를 결정해준다.
ex)Query에서 getMovie의 리턴타입을 Movie로 지정했다면, 어떤 로직을 통해 Movie를 리턴할 것인지 지정

Query => 데이터 조회(Get)
Mutation => 데이터 수정,삭제,삽입

EX)
query {
  movies(rating : 5){
    id
    title
  }
}
mutation {
  deleteMovie(id:0)
}
*/ 
const resolvers = {
    Query : {
        movie : (_, {id}) => getMovie(id), // id를 입력받아 getMovie함수에 id전달해 응답받음(첫번째 파라미터는 추후..)
        movies : (_, {rating, limit}) => getMovies(limit, rating),
        suggestions : (_, {id}) => getSuggestions(id)
    },
    Mutation : {
        deleteMovie : (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;
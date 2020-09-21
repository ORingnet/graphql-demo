import { DataSource } from 'apollo-datasource';

type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'GraphQL demo1',
    content: '超入門1',
    authorId: 1,
  },
  {
    id: 2,
    title: 'GraphQL demo2',
    content: '超入門2',
    authorId: 1,
  }
]

export class PostRepository extends DataSource {
  public getUserPosts(authorId: number): Post[] {
    return posts.filter(p => p.authorId === authorId);
  }
}
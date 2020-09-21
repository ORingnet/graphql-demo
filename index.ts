import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { UserRepository } from './user.repository';
import { PostRepository } from './post.repository';

export type Context = {
  userId: number | null;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: ({ req }): Context => {
    const auth = (req.headers && req.headers.authorization) || ''
    const userId = parseInt(Buffer.from(auth, 'base64').toString(), 10);
    return {
      userId: userId || null,
    };
  },
  dataSources: () => ({
    userRepo: new UserRepository(),
    postRepo: new PostRepository(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
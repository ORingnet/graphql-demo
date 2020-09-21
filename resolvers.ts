import { IResolvers } from 'apollo-server';

/**
 * The resolver function signature
 * fieldName: (parent, args, context, info) => data;
 */
export const resolvers: IResolvers = {
  Query: {
    me(_, __, { dataSources }) {
      const user = dataSources.userRepo.getUser();
      return {
        id: user.id,
        name: user.name,
        age: user.age,
      }
    },
  },

  Mutation: {
    login(_, { username, password }, { dataSources }) {
      const token = dataSources.userRepo.login(username, password);
      return {
        token,
      }
    }
  },

  User: {
    posts(user, _, { dataSources }) {
      return dataSources.postRepo.getUserPosts(user.id);
    }
  }
};
import { from } from 'rxjs';

type Branded<T, B extends string> = T & { __brand: B };

export type AuthorId = Branded<string, 'authorId'>;

export interface Author {
  id: AuthorId;
  name: string;
}

export type CommentId = Branded<string, 'commentId'>;

export interface Comment {
  id: CommentId;
  content: string;
}

export type PostId = Branded<string, 'postId'>;

export interface Post {
  id: PostId;
  content: string;
  authorId: AuthorId;
  commentIds: Array<CommentId>;
}

export const DataBase = {
  async findAuthors(ids: Array<AuthorId>) {
    return [
      {
        id: 'a001',
        name: 'Author 1',
      } as Author,
      {
        id: 'a002',
        name: 'Author 2',
      } as Author,
      {
        id: 'a003',
        name: 'Author 3',
      } as Author,
    ].filter((item) => ids.includes(item.id));
  },

  async findComments(ids: Array<CommentId>) {
    return [
      {
        id: 'c001',
        content: 'Comment 1',
      } as Comment,
      {
        id: 'c002',
        content: 'Comment 2',
      } as Comment,
      {
        id: 'c003',
        content: 'Comment 3',
      } as Comment,
    ].filter((item) => ids.includes(item.id));
  },

  async getPosts() {
    return from([
      {
        id: 'p001',
        content: 'Post 1',
        authorId: 'a001',
        commentIds: ['c001', 'c002'],
      } as Post,
      {
        id: 'p002',
        content: 'Post 2',
        authorId: 'a001',
        commentIds: [],
      } as Post,
      {
        id: 'p003',
        content: 'Post 3',
        authorId: 'a002',
        commentIds: ['c003'],
      } as Post,
    ]);
  },
};

export const expected = [
  {
    author: {
      id: 'a001',
      name: 'Author 1',
    },
    authorId: 'a001',
    commentIds: ['c001', 'c002'],
    comments: [
      {
        content: 'Comment 1',
        id: 'c001',
      },
      {
        content: 'Comment 2',
        id: 'c002',
      },
    ],
    content: 'Post 1',
    id: 'p001',
  },
  {
    author: {
      id: 'a001',
      name: 'Author 1',
    },
    authorId: 'a001',
    commentIds: [],
    comments: [],
    content: 'Post 2',
    id: 'p002',
  },
  {
    id: 'p003',
    content: 'Post 3',
    authorId: 'a002',
    commentIds: ['c003'],
    author: {
      id: 'a002',
      name: 'Author 2',
    },
    comments: [
      {
        id: 'c003',
        content: 'Comment 3',
      },
    ],
  },
];

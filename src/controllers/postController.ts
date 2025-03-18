import { Request, Response } from 'express';

export const getPosts = async (req: Request, res: Response) => {
  try {

    const posts: any[] = [
        { url: "test.jpg" },
        { url: "test2.jpg" },
        { url: "test.jpg" },
        { url: "test3.png" },
        { url: "test.jpg" },
        { url: "test2.jpg" },
        { url: "test.jpg" },
        { url: "test3.png" },
        { url: "test3.png" },
        { url: "test.jpg" },
        { url: "test2.jpg" }
    ];


    //TODO: Post fetching logic

    res.render('layouts/main', {
      title: 'Posts',
      content: 'pages/posts',
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

export const createPost = async (req: Request, res: Response) => {
};
import { PostCard } from "./post-card";

export const PostList = ({ post }) => {
  return post?.map((result, key) => <PostCard post={result} key={key} />);
};

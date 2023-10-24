import { PostCard } from "../post-card/postcard";

export const PostList = ({ post }) => {
  return post?.map((result, key) => <PostCard post={result} key={key} />);
};

import { useQuery } from "@tanstack/react-query";
import { postsRequest } from "api/posts";
import { queryKeys } from "constants/queryKeys";
import { IPostRequest } from "types/api/posts";
import { IErrorResponse } from "types/common";

const PostsView = () => {
  const { isLoading, isError, data, error } = useQuery<any, IErrorResponse>({
    queryKey: [queryKeys.POSTS],
    queryFn: postsRequest,
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <p>Error is {error.message}</p>;
  }

  return (
    <div>
      <ul>
        {data?.map(({ id, title }: IPostRequest) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsView;

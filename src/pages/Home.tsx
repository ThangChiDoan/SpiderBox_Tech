import { useQuery } from "@tanstack/react-query";
import { getUsersRequest, UserRequest } from "api/users";
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { Layout } from "components/layout/Layout";
import { UserProfileList } from "components/users/UserProfileList";

const Home = () => {
  const {
    isLoading,
    data = [],
    isError,
    error,
  } = useQuery<UserRequest[], Error>({
    queryKey: ["users"],
    queryFn: getUsersRequest,
  });

  if (isLoading) {
    return <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" />;
  }

  if (isError) {
    <h3>{error.message}</h3>;
  }
  return (
    <Layout>
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="font-bold text-2xl">Home page</h1>
        <Button content="Create new user" />
      </div>
      <Modal />
      <UserProfileList data={data} />
    </Layout>
  );
};

export default Home;

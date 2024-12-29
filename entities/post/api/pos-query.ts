import { useQuery } from '@tanstack/react-query';
import { API } from '../../../shared/api';

interface Props {
   queryKey: string;
   params: {
      data: string;
   };
}

interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

export const usePostQuery = ({
   queryKey,
   params,
}: Props) => {
   const { GET } = API();
   const fetchQuery = async () => {
      const response = await GET(params);

      return response;
   };

   const { data, isLoading, isError } = useQuery<Post[]>({
      queryKey: [queryKey],
      queryFn: fetchQuery,
   });

   return { data, isLoading, isError };
};

import { backendBaseUrl } from '../config';

export const API = () => {
   return {
      GET: async (params: { data: string }) => {
         const response = await fetch(
            `${backendBaseUrl}/${params.data}`,
         );
         return response.json();
      },
   };
};

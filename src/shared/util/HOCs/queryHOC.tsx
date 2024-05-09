import { FC, PropsWithChildren, useMemo } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClientProvider,
  QueryClient as _QueryClient,
} from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export const QueryClient: FC<PropsWithChildren> = ({ children }) => {
  const { toast } = useToast();
  const queryClient = useMemo(
    () =>
      new _QueryClient({
        queryCache: new QueryCache({
          onSuccess: ({ error, statusCode }: any) => {
            if (statusCode >= 200 && statusCode < 300) {
              toast({
                title: "Данные успешно загружены",
                variant: "positive",
              });
            } else if (statusCode >= 400 && statusCode < 500) {
              toast({
                title: `Ошибка: не удалось загрузить данные \n ${statusCode}: ${error} `,
                variant: "destructive",
                style: { whiteSpace: "pre-line" },
              });
            } else if (statusCode >= 500) {
              toast({
                title: `Ошибка сервера \n ${statusCode}: ${error}`,
                variant: "destructive",
                style: { whiteSpace: "pre-line" },
              });
            }
          },
        }),
        mutationCache: new MutationCache({
          onSuccess: ({ error, statusCode }: any) => {
            if (statusCode >= 200 && statusCode < 300) {
              toast({
                title: "Данные успешно обновлены",
                variant: "positive",
              });
            } else if (statusCode >= 400 && statusCode < 500) {
              toast({
                title: `Ошибка: не удалось обновить данные \n ${statusCode}: ${error} `,
                variant: "destructive",
                style: { whiteSpace: "pre-line" },
              });
            } else if (statusCode >= 500) {
              toast({
                title: `Ошибка сервера \n ${statusCode}: ${error}`,
                variant: "destructive",
                style: { whiteSpace: "pre-line" },
              });
            }
          },
        }),
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

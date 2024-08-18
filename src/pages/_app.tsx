import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersonProvider } from "@/context/PersonContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonProvider>
        <Component {...pageProps} />
      </PersonProvider>
    </QueryClientProvider>
  );
}

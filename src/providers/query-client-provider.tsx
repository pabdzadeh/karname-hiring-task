'use client'

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

type Props = {
  children: string | ReactNode | ReactNode[];
}

const QueryProvider: React.FC<Props> = ({ children }: Props) => {
  return <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
}

export default QueryProvider;
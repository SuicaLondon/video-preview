'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useRef } from 'react'

interface IReactQueryClientProviderProps {
	children: ReactNode
}

export const ReactQueryClientProvider = ({
	children,
}: IReactQueryClientProviderProps) => {
	const queryClientRef = useRef(
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 60 * 1000,
				},
			},
		}),
	)
	return (
		<QueryClientProvider client={queryClientRef.current}>
			{children}
		</QueryClientProvider>
	)
}

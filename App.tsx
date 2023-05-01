import { NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './src/navigation';

const queryClient = new QueryClient();

export default function App() {
	return (
		<NativeBaseProvider>
			<QueryClientProvider client={queryClient}>
				<Navigation />
			</QueryClientProvider>
		</NativeBaseProvider>
	);
}

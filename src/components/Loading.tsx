import { Center, Spinner } from 'native-base';
import { THEME } from '../styles/theme';

export function Loading() {
  return (
    <Center flex={1}>
     <Spinner color='yellow.500'/>
    </Center>
  );
}
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../Models';

import * as C from './styles'

export const HomeScreen = () => {
    const navigation = useNavigation<propsStack>();

    return (
        <C.Container>
            <C.Title>BlogPosts App</C.Title>
            <C.Button
                onPress={() => navigation.navigate('BlogList')}
            >
                <C.ButtonText>Entrar</C.ButtonText>
            </C.Button>
        </C.Container>
    )
}
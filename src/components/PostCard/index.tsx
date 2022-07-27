import { useContext, useEffect, useRef, useState } from 'react'
import LottieView from 'lottie-react-native'

import { ListContext } from '../../context/ListContext'
import { TPostList } from '../../screens/BlogListScreen'
import * as C from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

type TPostCard = {
    item: TPostList
}


export const PostCard = ({ item }: TPostCard) => {
    const [save, setSave] = useState(false);

    const animation = useRef<LottieView>(null)

    useEffect(() => {
        if(save) {
            animation!.current!.play(0, 45)
        }else {
            animation!.current!.play(0, 0)
        }
    }, [save])

    const { removePost } = useContext(ListContext)

    return (
        <C.Container>
            <C.ContainerWrapper>
                <C.TitleText>{item.title}</C.TitleText>
                <TouchableOpacity onPress={ () => setSave(save ? false : true)}>
                    <LottieView 
                        source={require('../../../assets/bookmark.json')}
                        autoPlay={false}
                        loop={false}
                        speed={1.2}
                        style={{ width: 50, height: 50 }}
                        ref={animation}
                    />
                </TouchableOpacity>
            </C.ContainerWrapper>
                <C.BodyText>{item.body}</C.BodyText>
                <C.RemoveButton onPress={() => removePost(item.id)}>
                    <C.RemoveButtonText>
                        Remover
                    </C.RemoveButtonText>
                </C.RemoveButton>
        </C.Container>
    )
}
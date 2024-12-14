import {Text, Pressable, PressableProps} from 'react-native';
import { styles } from './styles';
import { categoriesIcons } from '@/utils/categories-icons';
import {colors} from '@/styles/theme';

type Props = PressableProps & {
    name: string;
    iconId: string;
    isSelected?: boolean;
};

export function Category({iconId, isSelected=false, name, ...rest}: Props) {
    const Icon = categoriesIcons[iconId];

    return (
        <Pressable 
            style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
            <Icon size={16}  color={colors.gray[isSelected ? 100 : 400]}/>
            <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
        </Pressable>
    );
}
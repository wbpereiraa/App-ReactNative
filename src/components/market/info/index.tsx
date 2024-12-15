import { Text, View } from 'react-native';
import { IconProps, Icon } from '@tabler/icons-react-native';

import { styles } from './styles';
import { colors } from '@/styles/theme';

type props = {
    description: string;
    icon: React.ComponentType<IconProps>;
}

export function Info({ description, icon: Icon }: props) {
    return (
        <View style={styles.container}>
            <Icon size={16} color={colors.gray[400]} />
            <Text style={styles.text}>{description}</Text>
        </View>
    );
}
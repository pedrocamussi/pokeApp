import React from 'react';
import { StyleProp, ImageProps } from 'react-native';

import { Logo, LoadingIndicator } from './styles';

interface SpinnerProps {
	white?: boolean;
	resizeMode?: 'contain' | 'cover' | 'center';
	size?: number;
	style?: StyleProp<ImageProps>;
	visible?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
	style,
	visible = true, // For backwards compatibility
}) => {
	if (!visible) return null;

	return (
		<Logo style={style}>
			<LoadingIndicator />
		</Logo>
	);
};

export default React.memo(Spinner);

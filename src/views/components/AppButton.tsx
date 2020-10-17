import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { FontSize } from '../../constants/FontSize';
import { flexStyles } from '../../styles/common.styles';

interface AppButtonProps {
	label: string;
	color?: string;
  onPress: () => void;
  customStyle?: object
}

const AppButton = (props: AppButtonProps) => {
  let { label, onPress, color, customStyle } = props;
  
	return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress} 
      style={[ 
        flexStyles.flex_center, 
        styles.container, 
        {
          backgroundColor: color ?? AppColors.GREEN,
          ...customStyle
        },
      ]}
    >
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderRadius: 10
	},
	label: {
		fontSize: FontSize.NORMAL,
		color: AppColors.WHITE
	}
});

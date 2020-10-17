import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { FontSize } from '../../constants/FontSize';
import { flexStyles } from '../../styles/common.styles';
import moment from 'moment';

interface Props {
	keys: Array<{ key: string; label: string; type?: string }>;
	data: any;
}

const GridTable = (props: Props) => {
	const renderHeader = props.keys.map((header) => {
		return (
			<View key={header.key} style={styles.headerGrid}>
				<Text style={styles.header}>{header.label}</Text>
			</View>
		);
	});

	const renderValue = props.data.map((row: any) => {
    console.log(row)
		return props.keys.map((header) => {
			return (
				<View key={`value${header.key}`} style={styles.valueGrid}>
					<Text style={styles.value}>
						{header.type === 'timestamp' ? moment.unix(1602949738).format('MM/DD/YYYY') : row[header.key]}
					</Text>
				</View>
			);
		});
	});

	return (
		<View style={styles.container}>
			<View style={[ flexStyles.row, { flex: 1 } ]}>{renderHeader}</View>

			<View style={[ flexStyles.row, { flex: 1 } ]}>{renderValue}</View>
		</View>
	);
};

export default GridTable;

const styles = StyleSheet.create({
	container: {
		width: '100%', //Depends on container,
		display: 'flex',
		height: 150
	},
	headerGrid: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#cacaca',
		justifyContent: 'center',
		backgroundColor: AppColors.DARK_GREY,
		paddingHorizontal: 8
	},
	valueGrid: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#cacaca',
		justifyContent: 'center',
		backgroundColor: AppColors.WHITE,
		paddingHorizontal: 8
	},
	header: {
		fontSize: FontSize.SMALL,
		fontWeight: 'bold',
		color: AppColors.WHITE
	},
	value: {
		fontSize: FontSize.NORMAL
	}
});

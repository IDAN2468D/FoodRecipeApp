import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { COLORS, FONDS, FONTS, SIZES } from '../constants';

function CategoryCard({ containerStyle, categiryItem, onPress }) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: COLORS.radius,
                backgroundColor: COLORS.gray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image source={categiryItem.image}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: SIZES.radius,
                }}
            />

            <View
                style={{
                    width: "65%",
                    paddingHorizontal: 20,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    {categiryItem.name}
                </Text>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                    {categiryItem.duration} | {categiryItem.serving} Serving
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard

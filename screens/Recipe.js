import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Platform,
    Image,
} from 'react-native';

import { SIZES, FONTS, COLORS, icons } from "../constants";


const HEADER_HEIGHT = 350;

const Recipe = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = useState(null)
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let { recipe } = route.params
        setSelectedRecipe(recipe)
    }, [])


    function renderRecipeCardHeader() {
        return (
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: "200%",
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            }
                        ]
                    }}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderRecipeCardHeader()}

                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 30,
                            marginVertical: 5,
                        }}
                    >
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 50,
                                width: 50,
                                borderRadius: 5,
                                backgroundColor: COLORS.lightGray
                            }}
                        >
                            <Image source={item.icon}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: "flex-end",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                }}
                            >
                                {item.quantity}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Recipe;
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    Alert,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../constants';
import { CategoryCard, TrendingCard } from '../components/Index';


const Home = ({ navigation }) => {

    function Alert_Search() {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
    }


    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 50,
                    alignItems: "center",
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray,
                }}
            >
                <TouchableOpacity
                    onPress={Alert_Search}>
                    <Image
                        source={icons.search}
                        style={{ width: 20, height: 20, tintColor: COLORS.gray }}
                    />
                </TouchableOpacity>

                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3,
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search Recipes"
                />
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{
                flexDirection: "row",
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.padding,
                alignItems: 'center',
                height: 80,
            }}>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            ...FONTS.h2,
                        }}>
                        Hello ByProgramers,
                    </Text>
                    <Text
                        style={{
                            marginTop: 3,
                            color: COLORS.gray,
                            ...FONTS.body3,
                        }}
                    >
                        What you want to cook today?
                    </Text>
                </View>
                <TouchableOpacity onPress={() => console.log("Profile")}>
                    <Image source={images.profile} style={{ width: 50, height: 50, borderRadius: 20, }} />
                </TouchableOpacity>
            </View>
        )
    }


    function renderSeeRecipeCard() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen,
                }}
            >
                <View
                    style={{
                        width: 100,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={images.recipe}
                        style={{
                            width: 80,
                            height: 80,
                        }}
                    />
                </View>
                <View style={{ flex: 1, paddingVertical: SIZES.radius }}>
                    <Text style={{ width: "70%", ...FONTS.body4 }}>
                        You have 12 recipes that you haven't tried yet
                    </Text>
                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                        }}
                        onPress={() => console.log("See Recipes")}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGreen,
                                textDecorationLine: "underline",
                                ...FONTS.h3
                            }}
                        >
                            See Recipes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTrendingSection() {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >Trending Recipe
                </Text>
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate("Recipe", { recipe: item })}
                            />
                        )
                    }}
                />
            </View>
        )
    }

    function renderCategoryHeader() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                    marginHorizontal: SIZES.padding,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    Categories
                </Text>
                <TouchableOpacity>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4,
                        }}
                    >
                        View All
                    </Text>
                </TouchableOpacity>
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
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderSearchBar()}
                        {renderSeeRecipeCard()}
                        {renderTrendingSection()}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            categiryItem={item}
                            containerStyle={{
                                marginHorizontal: SIZES.padding,
                            }}
                            onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                    )
                }}
                ListEmptyComponent={
                    <View
                        style={{
                            marginBottom: 100,
                        }}
                    />
                }
            />
        </View>
    )
}

export default Home;
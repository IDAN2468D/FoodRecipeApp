import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, images, SIZES, FONTS } from '../constants';
import { CustomButton } from '../components/Index';


const Login = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%",

                }}
            >
                <ImageBackground
                    source={images.loginBackground}
                    style={{
                        flex: 1,
                        justifyContent: "flex-end"
                    }}
                    resizeMode="cover"
                >
                    <LinearGradient
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: "flex-end",
                            paddingHorizontal: SIZES.padding,
                        }}
                    >
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.largeTitle,
                            lineHeight: 45,
                        }}>
                            Cooking a Delicious Food Easily
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }


    function renderDetail() {
        return (
            <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: "70%",
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}
                >
                    Descover more htan 1200 food
                    recipes in you hands and Cooking
                    it easily!
                </Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <CustomButton
                        buttonText="Login"
                        buttonContainerStyle={{ paddingVertical: 18, borderRadius: 20, }}
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={() => navigation.replace("Home")}
                    />
                    <CustomButton
                        buttonText="Sign Up"
                        buttonContainerStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical: 18,
                            borderRadius: 20,
                            borderColor: COLORS.darkLime,
                            borderWidth: 1,
                        }}
                        colors={[COLORS.black, COLORS.black]}
                        onPress={() => navigation.replace("Home")}
                    />
                </View>
            </View>

        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}
        >
            <StatusBar barStyle="light-content" />
            {renderHeader()}
            {renderDetail()}
        </View>
    )
}

export default Login;
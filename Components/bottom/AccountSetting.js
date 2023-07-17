import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';



let mySetImage;



function AccountSetting({ navigation }) {
    const [product, productName] = React.useState("");
    const [price, priceTag] = React.useState("");
    const [image, setImage] = React.useState(null);


    React.useEffect(() => {
        mySetImage = setImage;

    }, []);

    // Create function named as InsertDataToServer() to send the Text Input data on server.
    function InsertDataToServer({ navigation }) {

        const fetchedData = fetch('http://192.168.1.77/E-Commerce/SubmitProduct.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    PImage: image,
                    PName: product,
                    PPrice: price,
                })
        }).then((response) => response.text())
            // proceed if data uplodaed successfully 
            .then((response) => {
                Alert.alert('Data Uloaded!', response, [
                    {
                        text: 'Cancel',
                        onPress: () => navigation.goBack(),
                    },
                    {
                        text: 'Ok',
                        onPress: () => navigation.navigate('viewItems'),
                    }
                ])
            })
            .catch((error) => {
                console.log(error)
            })


        return fetchedData;
    };




    return (
        <SafeAreaView style={styles.myHome}>
            <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>

                {/* Image picker  */}
                <Pressable style={{
                    width: 200, height: 250, margin: 20,
                    justifyContent: 'center', alignItems: 'center', elevation: 2,
                    overflow: 'hidden', backgroundColor: '#efefef', borderRadius: 10
                }}
                    onPress={() => addImage()}>
                    <Image style={{ width: 200, height: 200, borderRadius: 10 }}
                        source={{ uri: image }} />

                    <Text>{image ? 'Edit' : 'upload'} Image</Text>
                    <AntDesign name='camera' size={20} />
                </Pressable>

                {/* product description name, and price  */}
                <TextInput style={styles.inputStyle} placeholder='Product Name'
                    onChangeText={productName} />
                <TextInput inputMode='numeric' style={styles.inputStyle} placeholder='Price tag'
                    onChangeText={priceTag} />

                <Pressable style={{
                    padding: 10, height: 50, margin: 20, borderWidth: 1,
                    justifyContent: 'center', alignItems: 'center',
                    borderRadius: 10, backgroundColor: 'blue'
                }}
                    onPress={() => { InsertDataToServer({ navigation }) }}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>Upload Item</Text>
                </Pressable>
                <Button title={'Items'} onPress={() => navigation.navigate('viewItems')} />
            </View>



        </SafeAreaView >


    );



}



// upload Image on your product 
const addImage = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permission denied.');
        return;
    }

    try {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(JSON.stringify(_image));
        if (!_image.canceled) {
            mySetImage(_image.uri);
        }
    } catch (error) {
        console.log('Error uploading image:', error);
    }

}

const styles = StyleSheet.create({

    myHome: {
        flex: 1,
    },

    inputStyle: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 20,
    },
})

export default AccountSetting;
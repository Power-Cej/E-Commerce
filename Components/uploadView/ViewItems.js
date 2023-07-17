import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SearchBar } from '@rneui/base';



export default function ViewItems() {
    // read data from mySQL database 
    const [callData, newData] = React.useState(null);

    // get the total number of the items
    const itemNumber = callData ? callData.length : 0;

    // fetch search item 
    // const [value, setValue] = React.useState("");


    const [filteredData, setFilteredData] = React.useState(callData);

    React.useEffect(() => {
        // fetch data from API endpoint
        fetch('http://192.168.1.77/E-Commerce/ReadData.php')
            .then((response) => response.json())
            .then((data) => {
                newData(data);
                setFilteredData(data || []);

            }).catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <SafeAreaView style={styles.mainScreen}>
            < View style={{ backgroundColor: '#FFF', marginHorizontal: 10 }}>
                <SearchBar
                    placeholder='Search product name...'
                    platform='android'
                    onChangeText={(searchValue) => {
                        const filteredItems = callData.filter((item) =>
                            item.PName.toLowerCase().includes(searchValue.toLowerCase())
                        );
                        setFilteredData(filteredItems);
                    }}
                    placeholderTextColor='#000'
                />
            </View >
            <ScrollView style={{ flexGrow: 1, flexDirection: 'column', width: '100%', padding: 20 }}>

                <Text style={{ margin: 5, fontSize: 15, color: 'blue' }}> {itemNumber} Total products found</Text>

                {/* display fetch data here!  */}
                {filteredData !== null && filteredData.length > 0 ? (
                    filteredData.map((items, index) => (
                        <View key={index} style={{ flexDirection: 'row', height: 100, alignItems: 'center', marginVertical: 10, backgroundColor: '#e0e0e0' }}>
                            {/* Item Image  */}
                            {/* check the image if not null then display Image  */}
                            {items.PImage !== '' && (
                                <Image source={{ uri: items.PImage }} style={{ width: '30%', height: '90%', borderRadius: 10 }} />
                            )}
                            {/* Item Information  */}
                            <View style={{ justifyContent: 'center', flexDirection: 'column', marginHorizontal: 5, width: '50%', }}>
                                <Text numberOfLines={1} style={{ margin: 5, fontSize: 15, color: 'blue', }} >{items.PName}</Text>
                                <Text numberOfLines={1} style={{ margin: 5, fontSize: 15, color: 'blue', }}>₱ {items.PPrice}</Text>
                            </View>
                            {/* Edit Button  */}
                            <View style={{ width: '15%', }}>
                                <Pressable style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 5, backgroundColor: 'blue', padding: 5,
                                    marginVertical: 2
                                }}
                                    onPress={() => { alert('Edit') }}
                                >
                                    <Text style={{ fontSize: 13, color: 'white' }}>Edit</Text>
                                </Pressable>

                                <Pressable style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 5, backgroundColor: 'blue', padding: 5,
                                    marginVertical: 2
                                }}
                                    onPress={() => { alert('Delete') }}
                                >
                                    <Text style={{ fontSize: 13, color: 'white' }}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text>No product data available</Text>
                )}


            </ScrollView>
        </SafeAreaView >

    );

}

const styles = StyleSheet.create({

    mainScreen: {
        flex: 1,
    }
})
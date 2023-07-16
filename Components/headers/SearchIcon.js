import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';

function SearchIcon() {
    const [value, setValue] = React.useState("");
    return (
        <SafeAreaView style={styles.myHome}>
            {/* search bar  */}
            < View style={{ backgroundColor: '#FFF' }}>
                <SearchBar placeholder='Search...'
                    platform='android'
                    onChangeText={setValue}
                    placeholderTextColor='#000'
                    value={value}
                    onPressIn={() => alert(value)}
                />
            </View >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    myHome: {
        flex: 1,
    }
})

export default SearchIcon;
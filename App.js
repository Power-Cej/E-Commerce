import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable, Dimensions, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';


// App.js header Locations 
import SearchIcon from './Components/headers/SearchIcon';

// App.js bottom Locations 
import AccountSetting from './Components/bottom/AccountSetting';

// Other .js Locations 
import ViewItems from './Components/uploadView/ViewItems';

function HomeScreen({ navigation }) {

  // const [value, setValue] = React.useState("");



  return (
    <SafeAreaView contentContainerStyle={styles.homeParent}>

      {/* my header  */}
      <View style={styles.myHeader}>

        <Pressable onPress={() => navigation.navigate('searchIcon')} >
          <Image
            style={{ width: 55, height: 55, tintColor: '#fff' }}
            source={require('./assets/home_icons/drawer.png')}
          />
        </Pressable>

        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>GoStore</Text>

        <Pressable onPress={() => navigation.navigate('searchIcon')} >
          <Image
            style={{ width: 55, height: 55, tintColor: '#fff' }}
            source={require('./assets/home_icons/search.png')}
          />
        </Pressable>

      </View>





      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
        <View style={{
          alignItems: 'center',
        }}>
          {/* background  */}
          <View style={styles.homeBackground} />
          {/* my content  */}
          <View style={{ margin: 0, width: '90%', height: 100, justifyContent: 'center', }}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Hello!</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', width: '80%' }}>Find cool products fit your style</Text>

          </View>

          {/* rounded categories */}
          <View style={{ flexDirection: 'row', width: '90%', height: 100, margin: 0, justifyContent: 'space-between', alignItems: 'center', }}>
            <View styles={{ flexDirection: 'column' }}>
              <Image style={styles.categories}></Image>
              <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Bestsellers</Text>
            </View>
            <View styles={{ flexDirection: 'column' }}>
              <Image style={styles.categories}></Image>
              <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Dress</Text>
            </View>
            <View styles={{ flexDirection: 'column' }}>
              <Image style={styles.categories}></Image>
              <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Hates</Text>
            </View>
            <View styles={{ flexDirection: 'column' }}>
              <Image style={styles.categories}></Image>
              <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Jacket</Text>
            </View>
            <View styles={{ flexDirection: 'column' }}>
              <Image style={styles.categories}></Image>
              <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Jeans</Text>
            </View>
          </View>


          {/* Trending Trends */}

          <View style={{
            backgroundColor: '#33CAFF', width: '90%',
            height: 300, margin: 0, borderRadius: 20, padding: 15, alignItems: 'center',
            borderWidth: 1, justifyContent: 'center', borderColor: '#fff'
          }}>

            {/* trending content  */}

            <View style={{ width: '60%', alignSelf: 'flex-start' }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Trending Trends</Text>
              <Text style={{ fontSize: 15, color: '#fff' }}>It is a long established fact that a reader will be
                distracted by the readable content of a
                page when looking at its layout.</Text>
            </View>

            {/* trending image  */}

            <View style={{
              borderWidth: 2, width: '35%',
              right: 15,
              height: '60%', position: 'absolute',
              justifyContent: 'center', alignItems: 'center'
            }}>
              <Image style={{ padding: 10, width: '80%', height: '70%' }}
                source={require('./assets/home_icons/drawer.png')} />
            </View>

            {/* show products  */}

            <View style={{
              width: '48%', height: 50, marginTop: 20,
              justifyContent: 'center', backgroundColor: '#0C1378',
              borderRadius: 20, alignSelf: 'flex-start'
            }}>
              <Pressable style={{ alignItems: 'center', }} onPress={() => alert('Show Product')}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Show Products ⮕</Text>
              </Pressable>
            </View>

          </View>

          {/* On Sales */}

          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, margin: 20, alignSelf: 'flex-start' }}>On sale Today</Text>

          <View style={{ backgroundColor: '#FFF', width: '90%', height: 400, margin: 0 }}>


          </View>

        </View>
      </ScrollView>


      {/* my Bottom Navigation  */}

      <View style={styles.myBottom}>

        <Pressable onPress={() => navigation.navigate('Home')} >
          <Image
            style={{ width: 45, height: 45, tintColor: '#000' }}
            source={require('./assets/home_icons/drawer.png')}
          />
        </Pressable>



        <Pressable onPress={() => navigation.navigate('accountSetting')} >
          <Image
            style={{ width: 45, height: 45, tintColor: '#000' }}
            source={require('./assets/home_icons/user.png')}
          />
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

// my Screen Navigation 
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}
        options={{
          title: null,
          headerShown: false
        }}
      />

      <Stack.Screen name="searchIcon" component={SearchIcon}
        options={{
          title: null,
          headerShown: false,
        }}
      />

      <Stack.Screen name="accountSetting" component={AccountSetting}
        options={{
          title: null,
          headerShown: false,
        }}
      />

      <Stack.Screen name="viewItems" component={ViewItems}
        options={{
          title: null,
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const dimensions = Dimensions.get('window');
const screenHeight = dimensions.height;
const screenWidth = dimensions.width;

const styles = StyleSheet.create({

  myHeader: {
    backgroundColor: '#0b0b45',
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20

  },

  myBottom: {
    height: 70,
    width: screenWidth - 20,
    top: screenHeight - 40,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    elevation: 20
  },

  homeBackground: {
    width: screenWidth,
    height: screenHeight / 1.5,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0b0b45',
    position: 'absolute',
    borderBottomLeftRadius: Math.round(screenWidth + screenHeight) / 2,
  },

  homeParent: {
    flex: 1,
  },

  categories: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
  },

})
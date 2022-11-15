import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Header title={'DoctorApp'} icon={require('../images/logo.png')} />
          <Image
            source={require('../images/banner.jpg')}
            style={styles.banner}
          />
          <Text style={styles.heading}>Select Category</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#009FFD', '#2A2A72']}
                      style={styles.linearGradient}>
                      <Text style={styles.catName}>
                        {'Category ' + index + 1}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.docItem}>
                    <Image
                      source={require('../images/doctor.png')}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Doctor {index + 1}</Text>
                    <Text style={styles.docSpl}>Skin Specialist</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index / 2 == 0 ? 'green' : 'red',
                          opacity: index / 2 == 0 ? 1 : 0.5,
                        },
                      ]}>
                      {index / 2 == 0 ? 'Available' : 'Busy'}
                    </Text>
                    <CommonBtn
                      w={150}
                      h={40}
                      status={index / 2 == 0 ? true : false}
                      txt={'Book Appointment'}
                      onClick={() => {
                        if (index / 2 == 0) {
                          navigation.navigate('BookAppointment');
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          <Image
            source={require('../images/completed.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          <Image
            source={require('../images/pending.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallAmb');
          }}>
          <Image
            source={require('../images/ambulance.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
  bottomView: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
});

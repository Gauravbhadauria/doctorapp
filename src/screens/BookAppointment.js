import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';

const BookAppointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0);
  const [slots, setSlots] = useState([
    {sloT: '10:00-12:00PM', selected: false},
    {sloT: '12:00-02:00PM', selected: false},
    {sloT: '02:00-04:00PM', selected: false},
    {sloT: '04:00-06:00PM', selected: false},
    {sloT: '06:00-08:00PM', selected: false},
    {sloT: '08:00-11:00PM', selected: false},
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header
          icon={require('../images/back.png')}
          title={'Book Appointment'}
        />
        <Image source={require('../images/doctor.png')} style={styles.docImg} />
        <Text style={styles.name}>Doctor Jack</Text>
        <Text style={styles.spcl}>Skin Doctor</Text>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            numColumns={2}
            data={slots}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    {borderColor: selectedSlot == index ? 'blue' : 'balck'},
                  ]}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}>
                  <Text
                    style={{color: selectedSlot == index ? 'blue' : 'balck'}}>
                    {item.sloT}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} placeholder={'Enter Name'} />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 0 ? 'blue' : 'black',
              },
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}>
            <Image
              source={require('../images/male.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 1 ? 'blue' : 'black',
              },
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}>
            <Image
              source={require('../images/female.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <CommonBtn w={300} h={45} txt={'Book Now'} status={true} />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  docImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },

  spcl: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {marginTop: 20, marginBottom: 20},
});

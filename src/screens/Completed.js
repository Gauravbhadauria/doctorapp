import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Completed = () => {
  return (
    <View style={styles.container}>
      <Header
        icon={require('../images/back.png')}
        title={'Completed Appointments'}
      />
      <View>
        <FlatList
          data={[1, 1, 1, 1, 11]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../images/doctor.png')}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.name}>{'Doctor XYZ'}</Text>
                  <Text style={styles.timing}>{'08:10PM'}</Text>
                </View>
                <Text style={styles.status}>{'Completed'}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Completed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    padding: 5,
    color: 'green',
  },
});

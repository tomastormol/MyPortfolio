import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default CustomModal = ({ showModal, setShowModal }) => {

  console.log(showModal)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hi! Try clicking on a section</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textStyle}>Great!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 50.00,
    elevation: 24,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 170
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
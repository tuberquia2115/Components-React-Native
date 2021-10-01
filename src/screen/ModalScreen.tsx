import React, {useContext, useState} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../theme/appTheme';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    theme: {dividerColor, colors},
  } = useContext(ThemeContext);
  const onToggle = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />

      <Button title="Abrirl el modal" onPress={onToggle} />
      <Modal animationType="fade" visible={modalVisible} transparent>
        {/** Background modal fondo */}
        <View style={{...stylesScreen.root, backgroundColor: dividerColor}}>
          {/** Contenido del modal */}

          <View
            style={{
              ...stylesScreen.containerModal,
              backgroundColor: colors.background,
              borderColor: colors.primary,
              borderWidth: 2
            }}>
            <Text style={{...stylesScreen.titleModal, color: colors.text}}>
              Modal
            </Text>
            <Text style={{...stylesScreen.contentModal, color: colors.text}}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={onToggle} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const stylesScreen = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 250,
    height: 250,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },

  titleModal: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  contentModal: {
    fontSize: 18,
    fontWeight: '700',
    opacity: 0.6,
    marginBottom: 10,
  },
});
export default ModalScreen;

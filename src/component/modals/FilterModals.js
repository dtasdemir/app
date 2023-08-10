import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Icon, ListItem} from '@rneui/themed';

import m from '../../style/MStyle';

export default function FilterModals({
  modalVisible,
  FilterData,
  handleClose,
  HeadTitle,
  onPress,
  isSelected,
}) {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={handleClose}
      transparent={true}>
      <View style={[m.container, m.bg(m.white), m.ph(12), m.pt(12)]}>
        <View style={[m.row, m.vcenter]}>
          <Icon onPress={handleClose} underlayColor={m.white} name="chevron-left" type="entypo" size={28} />
          <Text
            style={[
              m.fontSCW(18, m.black, '600'),
              m.container,
              m.tcenter,
              m.mr(24),
            ]}>
            {HeadTitle}
          </Text>
        </View>
        {FilterData.map((i, ix) => (
          <ListItem key={ix} style={[m.bbW(0.8), m.bC(m.darkGray)]}>
            <TouchableOpacity
              onPress={() => onPress(i)}
              style={[m.row, m.hbetween, m.container]}>
              <Text>{i}</Text>
              {isSelected === i && (
                <Icon name="checkcircle" type="antdesign" color={m.black} />
              )}
            </TouchableOpacity>
          </ListItem>
        ))}
      </View>
    </Modal>
  );
}

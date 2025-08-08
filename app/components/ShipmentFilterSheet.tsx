import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { scaledSize, STATUSES } from '../utils';


type Props = {
  visible: boolean;
  selected: string[];
  onClose: () => void;
  onApply: (filters: string[]) => void;
};

const ShipmentFilterSheet = ({ visible, selected, onClose, onApply }: Props) => {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(selected || []);

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity onPress={() => onApply(selectedStatuses)}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subTitle}>SHIPMENT STATUS</Text>

          <ScrollView contentContainerStyle={styles.statusList}>
            {STATUSES.map((status) => (
              <TouchableOpacity
                key={status}
                onPress={() => toggleStatus(status)}
                style={[
                  styles.statusButton,
                  selectedStatuses.includes(status) && styles.selectedButton,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    selectedStatuses.includes(status) && styles.selectedText,
                  ]}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ShipmentFilterSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000055',

  },
  sheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    // maxHeight: '60%',
        height: 300, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    color: '#2F50C1',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneText: {
    fontSize: 16,
    color: '#2F50C1',
  },
  subTitle: {
    marginVertical: scaledSize(22),
    fontSize: scaledSize(12),
    color: '#6B6B6B',
    fontWeight: '600',
  },
  statusList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 12,
    gap: 16,
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F4F2F8',
  },
  selectedButton: {
    // backgroundColor: '#6E91EC',
    borderWidth:1,
    borderColor: '#2F50C1',
  },
  statusText: {
    fontSize: 14,
    color: '#58536E',
  },
  selectedText: {
    color: '#2F50C1',
  },
});

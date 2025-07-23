import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 container: { padding: 16 },
  label: { fontWeight: 'bold', marginTop: 12 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
    padding: 8, marginTop: 4,
  },
  switchRow: {
    flexDirection: 'row', alignItems: 'center', marginTop: 12,
  },
  buttonRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 24,
  },
});
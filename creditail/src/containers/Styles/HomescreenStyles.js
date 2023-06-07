import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  flatlist: {flex: 1, backgroundColor: '#EFEFEF'},
  invoiceCard: {
    height: 63,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingLeft: 24,
    paddingRight: 16,
  },
  invoiceIdVIew: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  invoiceId: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 21,
    color: '#646464',
  },
  invoiceAmount: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 21,
    color: '#000000',
  },
  invoiceName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    color: '#727272',
  },
});

export default styles;

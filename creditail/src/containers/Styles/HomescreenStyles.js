import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  statesText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
  },
  headerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24,
    color: '#ECECEC',
    marginLeft: 24,
  },
  flatlist: {flex: 1, backgroundColor: '#EFEFEF'},
  invoiceCard: {
    height: 70,
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
    fontSize: 15,
    lineHeight: 21,
    color: '#646464',
  },
  invoiceAmount: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 21,
    color: '#000000',
  },
  invoiceName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: '#727272',
  },
});

export default styles;

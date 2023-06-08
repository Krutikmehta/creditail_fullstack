import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#188748',
    gap: 25,
  },
  statesText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
  },
  tickImage: {
    height: 120,
    aspectRatio: 1,
  },
  invoiceDetailsView: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cashDetailsView: {
    gap: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  billNoText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16,
    color: '#EFEFEF',
  },
  cashText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 40,
    color: '#FFFFFF',
  },
  merchantText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#EFEFEF',
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    height: 1,
    width: 250,
    borderColor: '#F4F4F4',
  },
  paymentModeText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  redirectingView: {position: 'absolute', bottom: 10},
  redirectingText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#ECECEC',
    marginLeft: 24,
  },
  amountContainer: {
    height: 180,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#2A2D31',
    borderBottomEndRadius: 12,
  },
  inputContainerWrapper: {
    top: 30,
  },
  amountText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 17,
    color: '#C4C4C4',
    marginBottom: 2,
    marginLeft: 2,
  },
  inputContainer: {
    height: 52,
    width: 308,
    backgroundColor: '#24262A',
    borderRadius: 6,
  },
  paymentsViewWrapper: {
    flex: 1,
  },
  paymentsView: {
    marginTop: 120,
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  paymentModesView: {
    marginTop: 100,
    marginHorizontal: 8,
    height: 180,
    flexDirection: 'row',
    gap: 4,
  },
  modeCard: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedModeCard: {
    borderColor: '#2760B6',
    backgroundColor: '#DFE8F4',
    borderWidth: 1,
  },
  modeText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#2F2F2F',
  },
  paymentMethodText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20,
    color: '#2F2F2F',
  },
  confirmButton: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  confirmText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#5F5F5F',
  },
  selectedConfirmButton: {
    backgroundColor: '#2760B6',
  },
  selectedConfirmText: {
    color: '#FFFFFF',
  },
});

export default styles;

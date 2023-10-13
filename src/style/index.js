import {StyleSheet} from 'react-native';
import * as Color from './Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  header: {
    backgroundColor: Color.Blue,
    padding: 15,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 18,
    color: Color.White,
    textAlign: 'center',
    width: '80%',
  },
  body: {
    backgroundColor: Color.White,
  },
  section: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: Color.Gray,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  black: {
    color: Color.Black,
  },
  gray: {
    color: Color.Gray,
  },
  blue: {
    color: Color.Blue,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  bold: {
    fontWeight: 'bold',
  },
  big: {
    fontSize: 18,
  },
  marginbottom: {
    marginBottom: 10,
  },
  orange: {
    color: Color.Orange,
  },
  subsection: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Color.Gray,
    padding: 10,
  },

  stepActive: {
    backgroundColor: Color.Blue,
    width: 18,
    height: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
  },
  step: {
    backgroundColor: Color.Gray,
    width: 18,
    height: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
  },
  stepText: {
    color: Color.White,
    fontWeight: 'bold',
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 3,
    color: Color.Black,
  },

  input: {
    borderWidth: 0.5,
    borderColor: Color.Gray,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  button: {
    borderRadius: 5,
    backgroundColor: Color.Blue,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 15,
  },
  simpan: {
    borderRadius: 5,
    backgroundColor: Color.Orange,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 15,
  },
});

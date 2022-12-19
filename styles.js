import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    color: "#38A69D",
    fontSize: 30,
    marginBottom: 60,
  },
  card: {
    backgroundColor: "white",
    height: 60,
    width: 300,
    marginBottom:30,
  },
  textInput: {
    fontSize: 20,
    color: 'black',
    textAlign:'center',
    height: 60,
    width: 300,
    borderWidth: 2,
    borderColor:'#38A69D',
    borderRadius: 45,
  },
  button: {
    backgroundColor: '#38A69D',
    height: 60,
    width: 300,
    borderRadius: 40,
  },
  textButton: {
    color: 'white',
    textAlign:'center',
    fontSize: 20,
    margin: 10,
  },
});
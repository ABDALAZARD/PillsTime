import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38A69D'

  },
  title: {
    color: "#ffff",
    fontSize: 30,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 35,
    height: 300,
    width: 300,
    justifyContent:'center',
    alignItems:'center',
  },
  textCard: {
    fontSize: 20,
    color: 'black',
    textAlign:'center',
    margin: 20,
  },
  textInput: {
    textAlign:'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30,
    marginBottom:40,
  },
  button: {
    backgroundColor:"#38A69D",
    borderRadius: 12,
    margin: 5,
    padding: 10,    
    paddingLeft:80,
    paddingRight:80,
  },
  textButton: {
    color: 'white',
    textAlign:'center',
    fontSize: 12,
  },
});
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleApp: {
    color: "#006200",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 30,
    marginTop: 20,   
  },
  card: {
    backgroundColor: '#006200',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center'
  },
  subTitle: {
    color: "#006200",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 30,
    marginTop: 20, 
  },

  inputButtom: {
    backgroundColor: '#ffff',
    height: 30,
    width: 200,
    color: '#006200',
    marginTop: 10,
    marginBottom: 10,
    margin: 5,
    borderRadius: 20,
    textAlign: 'center',
  }, 
  button: {
    backgroundColor:'#006200',
    borderRadius:20,
    marginBottom: 5,
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    textAlign:'center',
    margin: 10,
  },
  text: {
    color:'#006200',
    textAlign:'center',
  },
  itemList: {
    color:'#006200',
    textAlign:'center',
    margin: 20,
    marginBottom: 20,
  },
})
  
  export default styles;
import TopBanner from './Assets/TopBanner.png';
import MainTruck from './Assets/MainTruck.png';
import Logo from './Assets/LogoTOYOTA.png';
import Desc from './Assets/Description.png';
import Send from './Assets/Send.png';
import CheckedBox from './Assets/ClickedBox.png';
import CheckBox from './Assets/CheckBox.png';
import {useState} from 'react'
import './App.css';
import './fonts/almoni-neue-medium-aaa.otf'
function App() {
  const [clicked,setClicked] = useState(false)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [touched, touchedSet] = useState(false)

  return (
    <div className="App"
    >
      <div className='container'>
      <img src={Logo} alt="Hino Banner" style={{padding:13}}></img>
        <img src={MainTruck} alt="MainTruck" height={'385px'}></img>
        <img src={Desc} alt="Description" style={{position:'absolute',width:'237px',height:'295px',marginTop:50,marginLeft:37}}></img>
        <p className='font-face-gm' style={{color:'white',margin:'0',marginTop:'10px' ,marginBottom:5,fontSize:20,display:'flex',justifyContent:'center'}} >:השאר פרטים ונצא לדרך</p> 
    
        <div className='inputContainer' style={{height:'180px'}}>
        <input value={name} 
        placeholder='שם מלא' 
        onChange={(e) => setName(e.target.value)} required ></input>
        <input value={phone}
        placeholder='נייד'
        onChange={(e) => setPhone(e.target.value)} required ></input>
        <input value={mail}
        placeholder='מייל'
        onChange={(e) => setMail(e.target.value)} required ></input>
        <img src={Send} alt="Send"
             onMouseDown={() => touchedSet(true)}
             onMouseUp={() => touchedSet(false)}
            style={{ opacity: touched ? 0.8 : 1, transition: 'opacity 200ms ease' }}
          ></img>
        <div style={{display:'flex'}} >
        <p className='regular' style={{color:'white',margin:'0',fontSize:14,marginRight:'10px',marginLeft:'11px'}} >אני מאשר קבלת חומרים פרסומים</p> 


        {!clicked? <img src={CheckBox} alt="CheckBox" style={{marginBottom:'5px'}} onClick={()=>setClicked(true)}></img> 
        : <img src={CheckedBox} alt="Checked" style={{marginBottom:'5px'}} onClick={()=>setClicked(false)}></img>}

        </div>
        <p className='font-face-gm' style={{color:'white',margin:'0',paddingTop:'5px',fontSize:24,}} >יוניון רכב תעשייתי</p> 

        </div>
        <img src={Logo} alt="Hino Banner" style={{padding:'15px'}}></img>

      </div>

        
    </div>
  );
}

export default App;
 
// const styles= StyleSheet({
  
// })
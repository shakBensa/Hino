import Form from './Assets/FORM.png';
import MainTruck from './Assets/MainTruck.png';
import Logo from './Assets/LogoTOYOTA.png';
import Desc from './Assets/Description.png';
import Send from './Assets/Send.png';
import CheckedBox from './Assets/ClickedBox.png';
import CheckBox from './Assets/CheckBox.png';
import Desktop from './Desktop';
import db from './firebase';
import { getAnalytics, logEvent } from "firebase/analytics";
import { collection,addDoc } from "firebase/firestore"; 
import {useState,useEffect,Alert} from 'react';
import './App.css';
import './fonts/almoni-neue-medium-aaa.otf';
function App() {

  const [clicked,setClicked] = useState(false)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [touched, touchedSet] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const analytics = getAnalytics();

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);

  },[])
  const submitHandler = async () => {
    const colRef = collection(db, 'leads')
    const payload = {
      name: name,
      phone: phone,
      mail: mail,
      ads: clicked
    }
    await addDoc(colRef, payload)

    logEvent(analytics, 'sign_up');
    console.log("Document written with Name: ", name);
  }

  const mobile = ()=>{
    return <div className="App"
    >
      <div className='container'>
      <img src={Logo} alt="Hino Banner" style={{padding:13,height:'19px'}}></img>
      <div style={{height:'17px',backgroundColor:'black'}}></div>
        <img src={MainTruck} alt="MainTruck"  ></img>
        <img src={Desc} alt="Description" style={{position:'absolute',width:'237px',height:'295px',marginTop:50,marginLeft:37}}></img>
        <p className='regular' 
        style={{color:'white',margin:'0',marginTop:'10px',marginBottom:'8px',
        fontSize:23,display:'flex',justifyContent:'center',}} >:השאר פרטים ונצא לדרך</p> 
    
        <div className='inputContainer' style={{height:'180px',marginTop:'0px'}}>
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
             onClick={()=> submitHandler()}
            style={{ opacity: touched ? 0.8 : 1, transition: 'opacity 200ms ease' }}
          ></img>
        <div style={{display:'flex'}} >
        <p className='regular' style={{color:'white',margin:'0',fontSize:14,marginRight:'10px',marginLeft:'11px'}} >אני מאשר קבלת חומרים פרסומיים</p> 


        {!clicked? <img src={CheckBox} alt="CheckBox" style={{marginBottom:'5px',marginRight:'4px'}} onClick={()=>setClicked(true)}></img> 
        : <img src={CheckedBox} alt="Checked" style={{marginBottom:'5px',marginRight:'4px'}} onClick={()=>setClicked(false)}></img>}

        </div>
        <p className='font-face-gm' style={{color:'white',margin:'0',paddingTop:'10px',fontSize:24,}} >יוניון רכב תעשייתי</p> 

        </div>
        <img src={Logo} alt="Hino Banner" style={{padding:'15px'}}></img>

      </div>

        
    </div>
  }

  return (
    <div>
      {windowWidth < 787? mobile() : <Desktop/>}
    </div>
     );
}

export default App;
 
// const styles= StyleSheet({
  
// })
import Left from './Assets/Desktop/LeftShadow.png';
import Main from './Assets/Desktop/Main.png';
import MainTruck from './Assets/Desktop/MainTruck.png';
import CheckedBox from './Assets/Desktop/BlackCheck.png';
import CheckBox from './Assets/Desktop/CheckBox.png';
import Send from './Assets/Desktop/Send.png';
import {useState,useEffect} from 'react'
import './desktop.css';
import './fonts/almoni-neue-medium-aaa.otf'
function Desktop() {
  const [clicked,setClicked] = useState(false)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [touched, touchedSet] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);

  },[])
  return (
    <div className="App"
    >
      <div className='container'>

        <img src={Main} className="main" alt="Main"></img>
      
        {/* <p className='regular' 
        style={{color:'white',margin:'0',marginTop:'10px',marginBottom:'8px',
        fontSize:23,display:'flex',justifyContent:'center',}} >:השאר פרטים ונצא לדרך</p>  */}
        <div className='inputContainer' style={{position:'absolute',marginLeft:'45px',marginTop:'225px'}}>
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
        {/* <p className='regular' style={{color:'white',margin:'0',fontSize:14,marginRight:'10px',marginLeft:'11px'}} >אני מאשר קבלת חומרים פרסומיים</p>  */}

<div style={{position:'absolute',top:'284px',left:'304px'}}>
{!clicked? <img src={CheckBox}  alt="CheckBox" height='18px'width='20px' style={{marginTop:'2px'}} onClick={()=>setClicked(true)}></img> 
        : <img src={CheckedBox} alt="Checked" height='20px'width='20px'  onClick={()=>setClicked(false)}></img>}

</div>

        </div>
        {/* <p className='font-face-gm' style={{color:'white',margin:'0',paddingTop:'10px',fontSize:24,}} >יוניון רכב תעשייתי</p>  */}

        </div>
        {/* <img src={Logo} alt="Hino Banner" style={{padding:'15px'}}></img> */}

      </div>

        
    </div>
  );
}

export default Desktop;
 
// const styles= StyleSheet({
  
// })
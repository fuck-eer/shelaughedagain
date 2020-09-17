import React from 'react'
import soundFile1 from '../../asset/music/A.R. Rahman - Luka Chuppi Best Audio Song Rang De Basanti Aamir Khan Lata Mangeshkar Soha.mp3'
import soundFile2 from '../../asset/music/BTS (방탄소년단) DNA Official MV.mp3'
import soundFile3 from '../../asset/music/Coldplay - Fix You.mp3'
import soundFile4 from '../../asset/music/James Arthur - Say you won t let go.mp3'
import soundFile5 from '../../asset/music/la vie en rose - edith piaf (cover).mp3'
import soundFile6 from '../../asset/music/La Vie En Rose.mp3'
import soundFile7 from '../../asset/music/let s fall in love for the night - finneas sub. español.mp3'
import soundFile8 from '../../asset/music/Meherbani - - The Shaukeens Akshay Kumar Arko Jubin Nautiyal.mp3'
import soundFile9 from '../../asset/music/MIC Drop.mp3'
import soundFile10 from '../../asset/music/Photograph - Ed Sheeran.mp3'
import soundFile11 from '../../asset/music/Sabse Peeche Hum Khade (Saarangi) - Ankur Tewari THE LOST SOUL.mp3'
import soundFile12 from '../../asset/music/Sham Best Video - Aisha Sonam Kapoor Abhay Deol Javed Akhtar Amit Trivedi Nikhil D Souza.mp3'
import soundFile13 from '../../asset/music/The Local Train - Aalas Ka Pedh - Choo Lo (Official Audio).mp3'
import soundFile14 from '../../asset/music/Tonight You Belong To Me.mp3'
import soundFile15 from '../../asset/music/Mera Mann Yahin Hoon Main Song T-Series Mixtape Ayushmann Khurrana Bhushan Kumar.mp3'

import Sound from 'react-sound'

const Musicmg=(props)=>{

    let WithsoundFile
    let k=Math.round((Math.random()*17))
    switch(k){
      
      case(1):
      WithsoundFile=soundFile1
      break;
      case(2):
      WithsoundFile=soundFile2
      break; 
      case(3):
      WithsoundFile=soundFile3
      break;
      case(4):
      WithsoundFile=soundFile4
      break;
      case(5):
      WithsoundFile=soundFile5
      break;
      case(6):
      WithsoundFile=soundFile6
      break;
      case(7):
      WithsoundFile=soundFile7
      break;
      case(8):
      WithsoundFile=soundFile8
      break;
      case(9):
      WithsoundFile=soundFile9
      break;
      case(10):
      WithsoundFile=soundFile10
      break;
      case(11):
      WithsoundFile=soundFile11
      break;
      case(12):
      WithsoundFile=soundFile12
      break;
      case(13):
      WithsoundFile=soundFile13
      break;
      case(14):
      WithsoundFile=soundFile14
      break;
      case(15):
      WithsoundFile=soundFile15
      break;

      default:
      WithsoundFile=soundFile10
      break;
    }
    

return(
    <Sound
        url={WithsoundFile}
        volume={20}
        loop={true}
        playStatus={Sound.status.PLAYING}
        playFromPosition={30000}
      />
);

}

export default Musicmg
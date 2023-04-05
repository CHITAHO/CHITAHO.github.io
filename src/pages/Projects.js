import React from 'react';
import Uni_EM_Water_2 from '../img/Uni_EM_Water_2.png';
import AI_Intelligent_SW from '../img/ai_intelligent_sw.PNG'

function Projects() {
  return (
    <div>
        <h2>AI 공공하수처리시설 지능화 시스템</h2>
        <p>기술스택 : Java, SpringBoot, JavaScript, NodeJS, PostgreSQL</p>
        {/* <img src={AI_Intelligent_SW} alt="AI_Intelligent_SW 이미지" style={{ width: '1500px', height: 'auto' }} /> */}
        <h2>상수관망 최적관리 시스템(Uni-EM-Water 2.0 Professional)</h2>
        <p>기술 스택 : Java, Spring, JavaScript, Oracle </p>
        {/* <img src={Uni_EM_Water_2} alt="Uni_EM_Water_2 이미지" style={{ width: '1500px', height: 'auto' }} /> */}
    </div>
    
  );
}

export default Projects;
import React from 'react';
import SplitPane from 'react-split-pane';

import Course from './Course/Course';
import Course2 from './Course/Course2';
import Course3 from './Course/Course3';
import "../Courses/C.css"


const Courses = (props) => {
    return (
        <div align="center">
            <SplitPane split='horizontal' defaultSize='30%' style={{ marginTop: `125px` }}>
                <SplitPane split='vertical' defaultSize='50%'>
                    <div><Course lectureCode='CMPE 414: INTRODUCTION TO INFORMATION RETRIEVAL' lecturerName='Tayfun Kucukyilmaz'/></div>
                    <div><Course2 lectureCode='CMPE 442: INTRODUCTION TO MACHINE LEARNING' lecturerName='Venera Adanova'/></div>
                </SplitPane>
                <SplitPane split='vertical' defaultSize='50%'>
                    <div><Course3 lectureCode='CMPE 472: NETWORK' lecturerName='Emin Kuğu'/></div>
                </SplitPane>
            </SplitPane>
        </div>
    );
}

export default Courses;
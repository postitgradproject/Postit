import React from 'react';
import SplitPane from 'react-split-pane';

import Course from './Course/Course';

const Courses = (props) => {
    return (
        <div>
            <SplitPane split='vertical' defaultSize='50%'>
                <div><Course lectureCode='CMPE 414' lecturerName='Tayfun Kucukyilmaz'/></div>
                <div><Course lectureCode='CMPE 442' lecturerName='Venera Adanova'/></div>
            </SplitPane>
        </div>
    );
}

export default Courses;
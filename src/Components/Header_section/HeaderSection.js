import * as React from 'react';
import InputField from '../Input_form/Inputform';

function HeaderSection() {
    return (  
        <div className='Header-container'>
              <div className='Todo-box'>
                    <p className='Header-title'>Todo List App</p>
                    <InputField type={'text'} placeholder={'Enter task'} />
                    
              </div>
        </div>
    );
}

export default HeaderSection;

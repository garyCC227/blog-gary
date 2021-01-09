import React from 'react';

import styles from './LabelList.module.css';

const LabelList = () =>{

  return (
    <>
    <div className={styles.labels}>
      {/* <h4 className="ui header">Tags:</h4> */}
      
      <div className={`ui pink label ${styles['my-label']}`}>
        <div class="ui checkbox">
          <input type="checkbox" name="example"/>
          <label style={{color:'white'}}>Pink</label>
        </div>
      </div>

      <div className={`ui blue label ${styles['my-label']}`}>
        <div class="ui checkbox">
          <input type="checkbox" name="example"/>
          <label style={{color:'white'}}>Blue</label>
        </div>
      </div>

      <div className={`ui teal label ${styles['my-label']}`}>
        <div class="ui checkbox">
          <input type="checkbox" name="example"/>
          <label style={{color:'white'}}>Teal</label>
        </div>
      </div>

      {/* <a class={`ui teal label `}>Orange</a>
      <a class={`ui blue label `}>Yellow</a> */}
    </div>
    <p> About 100 results</p>
      </>
  );

}

export default LabelList;
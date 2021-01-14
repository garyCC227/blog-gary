import React from 'react';

import styles from './LabelList.module.css';

import tabData from './tab.json'

const LabelList = () =>{

  return (
    <>
    <div className={styles.labels}>
      {/* <h4 className="ui header">Tags:</h4> */}
      
      <div>
        <h1> Hello here </h1>
        {
        tabData.map( (tabDetail, index) =>{
          return(
            <div className={`${tabDetail.className} ${styles['my-label']}` }>
              <div class="ui checkbox">
                <input type="checkbox" name="example"/>
                <label style={{color:'white'}}>{tabDetail.label}</label>
              </div>
            </div>
          )

        }
        )
        }
      </div>
      
      

      {/* <a class={`ui teal label `}>Orange</a>
      <a class={`ui blue label `}>Yellow</a> */}
    </div>
    <p> About 100 results</p>
      </>
  );

}

export default LabelList;
import React from 'react';
import styles from './TotalNum.css';

function TotalNum({data}) {

  var dataNum=data.num.toString().split('');
  var ele=dataNum.map((v,i)=>{
    return <span key={i}>{v}</span>
  })

  return (
    <div className={styles.normal}>
      <h2>{data.title}</h2>
      <div className={styles.total_num} style={{color: data.color}}>{ele}</div>
    </div>
  );
}

export default TotalNum;

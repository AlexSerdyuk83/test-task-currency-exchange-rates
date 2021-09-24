import React from "react";
import _ from "lodash";
import styles from "./Table.module.css";

const tableBodyRender = (data) => {
  return data.map((item) => <div key={item.Cur_ID} className={styles.container}>
      <h4 className={styles.container_item}>{item.Cur_ID}</h4>
      <h4 className={styles.container_item}>{item.Date}</h4>
      <h4 className={styles.container_item}>{item.Cur_Abbreviation}</h4>
      <h4 className={styles.container_item}>{item.Cur_Scale}</h4>
      <h4 className={styles.container_item}>{item.Cur_Name}</h4>
      <h4 className={styles.container_item + ' ' + styles.b_n}>{item.Cur_OfficialRate}</h4>
    </div>
  )
};

const Table = ({ dataUrl }) => {

  const { data, headings } = dataUrl;

  return (
    <div>
      <div className={`${styles.container} ${styles.sticky}`}>
        {
          headings.map((head) => <h4 key={_.uniqueId()} className={styles.container_item}>{head}</h4>)
        }
      </div>
      <div>
        {
          tableBodyRender(data)
        }
      </div>
    </div>
  );
}

export default Table;

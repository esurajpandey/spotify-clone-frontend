import React from "react";
import TextButton from "../../../../components/TextButton";
import css from "./Recover.module.css";
function Row({ id,date, title, songs,restore }) {
  return (
    <tr className={css.rows} key={id}>
      <td key={date} className={css.deleted}>{date}</td>
      <td key={title} className={css.title}>{title}</td>
      <td key={`${songs}-${id}`} className={css.songs}>{songs}</td>
      <td className={css.btn}>
        <TextButton
          type="reset"
          text="Cancel"
          bcColor="white"
          color="black"
          border="0"
          onClick={()=>restore(id)}
          fontSize= "0.8rem"
          padding= {{paddingInline : "25px", paddingBlock : "0rem", size : "30px"}}
        />
      </td>
    </tr>
  );
}

export default Row;
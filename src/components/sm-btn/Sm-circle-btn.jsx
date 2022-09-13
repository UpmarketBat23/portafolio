import React from "react";
import "./Sm-circle-btn.css";
import FaceFace from "../assets/icons8-facebook-f.svg";

function CircleBtn() {
  return (
    <div>
      <a href='https://www.google.com/search?q=%3Ca%3E+in+jsx&rlz=1C1OKWM_esAR1010AR1010&sxsrf=ALiCzsYC0-E9zsntxE7DspBkQg5kXRR3EA:1663027195862&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiujIuKu5D6AhVavJUCHQXkDlsQ_AUoAXoECAEQAw&biw=1360&bih=625&dpr=1'>
        <div class='facebook button-big'>
          <img src={FaceFace} alt='face' />
          <i class='fa fa-facebook'></i>
        </div>
      </a>
      <a href='https://www.google.com/search?q=%3Ca%3E+in+jsx&rlz=1C1OKWM_esAR1010AR1010&sxsrf=ALiCzsYC0-E9zsntxE7DspBkQg5kXRR3EA:1663027195862&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiujIuKu5D6AhVavJUCHQXkDlsQ_AUoAXoECAEQAw&biw=1360&bih=625&dpr=1'>
        <div class='youtube button-big dist'>
          <img src={FaceFace} alt='face' />
          <i class='fa fa-youtube'></i>
        </div>
      </a>

      <a href='https://www.google.com/search?q=%3Ca%3E+in+jsx&rlz=1C1OKWM_esAR1010AR1010&sxsrf=ALiCzsYC0-E9zsntxE7DspBkQg5kXRR3EA:1663027195862&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiujIuKu5D6AhVavJUCHQXkDlsQ_AUoAXoECAEQAw&biw=1360&bih=625&dpr=1'>
        <div class='instagram button-big dist'>
          <img src={FaceFace} alt='face' />
          <i class='fa fa-instagram'></i>
        </div>
      </a>
    </div>
  );
}

export default CircleBtn;

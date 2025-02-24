import './App.css';
import React from 'react';
import { useState } from 'react';
import SliderCaptcha from 'gotcha-slider-captcha-react/dist/slider-captcha';
 
export const App = () => {
  const [captchaTokenVerify, setCaptchaTokenVerify] = useState(false);
  const verifiedCallback = (token) => {
    console.log("Slider Captcha Token: " + token);
    if (token) {
      setCaptchaTokenVerify(true);
    }
  };


  return (
    <div className="App">
      <SliderCaptcha
      sitekey="site-key"
      create="http://localhost:3000/v2/captcha/create"
      verify="http://localhost:3000/v2/captcha/verify"
      callback={verifiedCallback}
    />

    </div>
  );

};
export default App;

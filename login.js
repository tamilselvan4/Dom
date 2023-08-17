mainDiv=document.createElement('div');
mainDiv.className="main-div";
document.body.appendChild(mainDiv);

loginDiv=document.createElement('div');
loginDiv.className="login-div";
mainDiv.appendChild(loginDiv);

getInputDiv=document.createElement('div');
getInputDiv.className="get-input-div";
loginDiv.appendChild(getInputDiv);

welcomeHead=document.createElement('h1');
welcomeHead.className="h1";
welcomeHead.textContent="Welcome back";
getInputDiv.appendChild(welcomeHead);

welcomeText=document.createElement('p');
welcomeText.className="welcome-text";
welcomeText.textContent="Welcome back! please enter your details";
getInputDiv.appendChild(welcomeText);

label1=document.createElement('label');
label1.textContent="Email";
getInputDiv.appendChild(label1);

br1=document.createElement('br');
getInputDiv.appendChild(br1);

input1=document.createElement('input');
input1.setAttribute('type','email');
input1.setAttribute('placeholder','Enter your email');
input1.className="input-text";
getInputDiv.appendChild(input1);

br1=document.createElement('br');
getInputDiv.appendChild(br1);

label2=document.createElement('label');
label2.textContent="Password";
getInputDiv.appendChild(label2);

br1=document.createElement('br');
getInputDiv.appendChild(br1);

input2=document.createElement('input');
input2.setAttribute('type','password');
input2.setAttribute('placeholder','**********');
input2.className="input-text-pass";
getInputDiv.appendChild(input2);

br1=document.createElement('br');
getInputDiv.appendChild(br1);

rememberDiv=document.createElement('div');
rememberDiv.className="remember-me-div";
getInputDiv.appendChild(rememberDiv);

input3=document.createElement('input');
input3.setAttribute('type','checkbox');
rememberDiv.appendChild(input3);

para1=document.createElement('p');
para1.className="remember-me";
para1.innerText="Remember for 30 days";
rememberDiv.appendChild(para1);

forgotPassword=document.createElement('a');
forgotPassword.className="forgot-password";
forgotPassword.innerText="forgot Password";
rememberDiv.appendChild(forgotPassword);

button1=document.createElement('button');
button1.className="button-sign-in";
button1.innerText="Sign in";
getInputDiv.appendChild(button1);

br1=document.createElement('br');
getInputDiv.appendChild(br1);

button2=document.createElement('button');
button2.className="button-google";
button2.innerText="Sign in with Google";
getInputDiv.appendChild(button2);

googleImg=document.createElement('img');
googleImg.className="google-logo";
googleImg.src="google.png";
button2.appendChild(googleImg);

para2=document.createElement('p');
para2.className="dont-text";
para2.innerText="Don't have an account? ";
getInputDiv.appendChild(para2);

signUpLink=document.createElement('a');
signUpLink.className="link-sign-up";
signUpLink.innerText="Sign up";
para2.appendChild(signUpLink);

imgDiv=document.createElement('div');
imgDiv.className="img-div";
mainDiv.appendChild(imgDiv);

loginImg=document.createElement('img');
loginImg.className="login-img";
loginImg.src="login_img.png";
imgDiv.appendChild(loginImg);


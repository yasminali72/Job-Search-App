npm i mongoose
npm i dotenv
npm i moment
npm i joi
npm i bcryptjs
npm i crypto-js
npm i nodemailer
npm i nanoid
npm i jsonwebtoken
npm install google-auth-library --save
npm i cors
npm i multer
npm i cloudinary
**************************************regex**************************
password /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/
phone /^\+?(1|20|44|49|91|971|966|33|34|39|86|81|55|27)\d{9}$/
*************************************DB***********************
collections
1 user
2 company
3 job
4 application


********************************auth api*******************
1 signup
- check user email if it exist before or not
- send OTP ( hash it) ⇒ ⚠(verify email in 10 min)
- hash (bcrypt) password and encrypt mobileNumber
2. confirm OTP 
    - check OTP expire date
    - check OTP type 
    - check otp value
3. Sign In (only system provider)
    - Sign In using  email  and password
    - Return refresh (7d) token and access token (1h)
4. signup with google 
5. Login with google 
6. Send OTP for Forget password 
7. Reset password =>forget,code,reset
    - check OTP (expire date, type and value)
    - reset password
8. Refresh token

***********************************user api*************************
1. Update user account
2. Get login user account data 
3. Get profile data for another user (share profile)
4. Update password
5. Upload Profile Pic 
6. Upload Cover Pic 
7. Delete Profile Pic
8.Delete Cover Pic
9. Soft delete account  (freeze)
**************************************company api**************************************
register
send email to createdby to verify register
verify code
login by company email
update data by company owner
soft delete by (owner or admin(createdby))
add hr
get company  (by login of company)
get all companies
get spcific company (by id) and all jobs
get company by name and jobs
**************************************job api*********************************
note : owner email of company
addjob (by owner or hr)
update job (by owner)
delete job (by hr to releted of company or owner )
get all jobs

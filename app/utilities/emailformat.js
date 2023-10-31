const emailformat = {
  to: email,
  subject: "Password Reset",
  html: `
                <div>
                    <h1>Password Reset</h1>
                    <div>Click <a href="">here</a> to reset your password</div>
                    <div>or use this UID = ${uid}</div>
                </div>
            `,
};

module.exports = { emailformat };

import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
  var mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "task-manager",
      link: "https://mailgen.js/",
    },
  });
  // Generate an HTML email with the provided contents
  var emailHTML = mailGenerator.generate(options);

  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  var emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MIALTRAP_PASS,
    },
  });
  const mail = {
    from: "rahul.raj9237@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHTML,
  };
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Email failed", error);
  }
};

const emailVerificationMailGenContent = (username, verifiationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app!, we are very excited to have u onboard",
      action: {
        instructions: "To get started with Mailgen, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your email",
          link: verifiationUrl,
        },
      },
    },
  };
};

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset your password",
      action: {
        instructions: "Click here to change the password",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
    },
  };
};

// sendMail({
//   email: user.email,
//   subject: "Hello",
//   mailGenContent: emailVerificationMailGenContent(username, ``),
// });

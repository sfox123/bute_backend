function atcHtml(fullname, email, number, query) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang='en'>
  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
  </head>
  <body style='margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, sans-serif;'>
    <table align='center' border='0' cellpadding='0' cellspacing='0' width='600' style='border-collapse: collapse;'>
      <tr>
        <td align='center' bgcolor='#0073e6' style='padding: 40px 0 30px 0;'>
          <img src='https://www.asiatradecentre.com/assets/imgs/logo-light.png' alt='ATC Logo' width='300' height='100' style='display: block;' />
        </td>
      </tr>
      <tr>
        <td bgcolor='#ffffff' style='padding: 40px 30px 40px 30px;'>
          <table border='0' cellpadding='0' cellspacing='0' width='100%'>
            <tr>
              <td style='color: #153643; font-family: Arial, sans-serif; font-size: 24px;'>
                <b>New Contact Request</b>
              </td>
            </tr>
            <tr>
              <td style='padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;'>
                <p>Hello ATC Team,</p>
                <p><strong>${fullname}</strong> (<a href='mailto:${email}'>${email}</a>) has contacted you with the following query:</p>
                <p><strong>${query}</strong></p>
                <p>Contact Number: ${number}</p>
                <p>Best Regards,<br/>Asian Trade Centre</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor='#0073e6' style='padding: 30px 30px 30px 30px;'>
          <table border='0' cellpadding='0' cellspacing='0' width='100%'>
            <tr>
              <td style='color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;'>
                <p>&copy; ATC, All rights reserved.</p>
              </td>
              <td align='right'>
                <table border='0' cellpadding='0' cellspacing='0'>
                  <tr>
                    <td>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

module.exports = atcHtml;

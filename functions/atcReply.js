function atcReply(fullname) {
  return `<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<meta http-equiv='Content-Type' content='text/html charset=UTF-8' />
<html lang='en'>
  <head></head>
  <div id='__react-email-preview' style='display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0'>
    Your One-Stop for Premium Building Materials.
  </div>
  <body style='background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif'>
    <table align='center' role='presentation' cellSpacing='0' cellPadding='0' border='0' width='100%' style='max-width:37.5em;margin:0 auto;padding:20px 0 48px'>
      <tr style='width:100%'>
        <td>
          <img alt='atc' src='https://www.asiatradecentre.com/assets/imgs/logo-light.png' width='100' height='100' style='display:block;outline:none;border:none;text-decoration:none;margin:0 auto' />
          <p style='font-size:16px;line-height:26px;margin:16px 0'>Hi ${fullname},</p>
          <p style='font-size:16px;line-height:26px;margin:16px 0'>
            Thank you for reaching out to Asian Trade Centre! We have received your inquiry through our Contact Us form.
            <br/> Our team is already on it, and we'll be getting back to you soon with all the information you need.
            <br/> Looking forward to working with you!
          </p>
          <table style='text-align:center' align='center' border='0' cellPadding='0' cellSpacing='0' role='presentation' width='100%'>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <p style='font-size:16px;line-height:26px;margin:16px 0'>Best,<br />The ATC Team</p>
          <hr style='width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0' />
          <p style='font-size:12px;line-height:24px;margin:16px 0;color:#8898aa'>
            No 542, Sri Sangaraja Mawatha Colombo 10.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

module.exports = atcReply;

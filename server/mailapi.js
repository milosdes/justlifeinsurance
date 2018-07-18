let express 	= require('express')
let nodemailer 	= require('nodemailer')

let smtpInfo = {
	host: "smtp.zoho.com",
	secure: true,
	auth: {
		user: 'system@justlifeinsurance.ca',
		pass: 'g00dc0mpany'
	}	
}

let port = 8080

console.log("Initializing MailAPI...")

const initEmailer = (initWebServer) => {
	let emailer = nodemailer.createTransport(smtpInfo)
	emailer.verify((err, success) => {
		if (err) {
			console.error(err)
			return
		} 
		console.log("Checked SMTP information.")
		initWebServer(emailer)
	})
}

const initWebServer = (onSuccess) => (emailer) => {
	let web = express()
	web.use(express.json())

	web.post('/api/send/', (req, res) => {
		console.log('>> Sending email')
		let mail = {
			from: "system@justlifeinsurance,
			to: req.body.to,
			subject: req.body.subject,
			text: req.body.text,
			html: req.body.html
		}
		emailer.sendMail(mail, (error, info) => {
			if (error) {
				console.error(error)
				console.error(mail)
				res.send(error)
			} else {
				res.send('{"ok": true}')
			}
		})
	})

	web.listen(port, () => {
		console.log('MailAPI ready in port %s!', port)
		onSuccess()
	})
}

module.exports = {
	init(onSuccess) {
		initEmailer(initWebServer(onSuccess))
	}
}
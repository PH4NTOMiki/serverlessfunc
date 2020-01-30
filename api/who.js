module.exports = (req, res) => {
	const who = (req.body && req.body.who)||req.query.who||req.cookies.who||'anonymous';
	res.status(200).send(`Hello ${who}!`)
}
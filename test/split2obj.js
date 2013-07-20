var test = require('tape'),
	resumer = require('resumer'),
	split2obj = require('../');

test('whitespace separated words to objects', function (t) {
	t.plan(1);

	var stream = resumer().queue('github sydcanem split2obj').end();

	stream
		.pipe(split2obj(['site', 'author', 'repository']))
		.on('data', function (obj) {
			t.deepEqual(obj, {site:'github', author:'sydcanem', repository:'split2obj'});
		})
		.on('error', function (err) {
			t.fail(err);
		});
});
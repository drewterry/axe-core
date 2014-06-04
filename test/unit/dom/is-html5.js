describe('dom.isHTML5', function () {
	'use strict';

	it('should return false on any document that is not HTML5', function () {
		var doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
		assert.isFalse(kslib.dom.isHTML5(doc));
	});

	it('should return true on any document that is HTML5', function () {
		var doc = document.implementation.createHTMLDocument('Monkeys');
		assert.isTrue(kslib.dom.isHTML5(doc));
	});

	it('should return true on any document that is HTML5 - fixture', function () {
		assert.isTrue(kslib.dom.isHTML5(document));
	});
});
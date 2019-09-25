'use strict';

const rule = require( '../rules/no-fx-interval' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.fx.interval is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-fx-interval', rule, {
	valid: [ 'interval', 'fx.interval', '$.interval', 'a.fx.interval', '$.fx' ],
	invalid: [
		{
			code: '$.fx.interval',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );

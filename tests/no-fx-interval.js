'use strict';

const rule = require( '../rules/no-fx-interval' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.fx.interval is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'interval', 'fx.interval', '$.interval', 'a.fx.interval', '$.fx' ],
	invalid: [
		{
			code: '$.fx.interval',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );

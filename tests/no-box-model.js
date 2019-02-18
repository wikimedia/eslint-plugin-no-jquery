'use strict';

const rule = require( '../rules/no-box-model' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.boxModel is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'boxModel', 'a.boxModel', 'boxModel.foo', 'a.boxModel.foo' ],
	invalid: [
		{
			code: '$.boxModel',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$.boxModel.style',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );

'use strict';

const rule = require( '../rules/no-box-model' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.boxModel is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-box-model', rule, {
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

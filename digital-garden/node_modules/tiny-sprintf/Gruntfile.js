module.exports = function(grunt) {
	require('grunt-config-plus')(grunt, {
		init: 'grunt-config/*.*',
		style: {
			descr: 'italic'
		},
		override: {
			init: {
				default: {
					visible: false
				},
				view: {
					visible: false
				},
				status: {
					visible: false
				},
				tasks: {
					visible: false
				},
				help: {
					visible: false
				}
			}
		}
	});
};

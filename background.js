$(document).ready(function () {
	// Watch main content
	$('.content-wrapper').watch({
		properties: 'prop_innerHTML',
		watchChildren: true,
		callback: function (data, i) {
			// Hide locked
			chrome.storage.sync.get('hideLocked', function(response) {
				if (response.hideLocked) {
					$('tr i.fa.fa-lock').closest('tr').css('display', 'none')
				}
			});
		}
	});
});

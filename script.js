let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function() {
	let clipboard = new ClipboardJS('#copyButton');


	$('#copyButton').click(function() {
		let signatureContent = $('#signature').html();

		html = signatureContent;
		html = html.replace(/<\!\-\-UNCOMMENT/g, "");
		html = html.replace(/UNCOMMENT\-\->/g, "");

		$('#signatureHidden').append(html);
	});

	clipboard.on('success', function(e) {
        alert('Copied!');
        e.clearSelection();
        $('#signatureHidden').empty();
    });

    let $textInputs = $('.text-input');

    $textInputs.on('input', function() {
        var inputValue = $(this).val();
        var outputID = $(this).data('output');

        $('#' + outputID).text(inputValue);
    });

    $(".text-input[data-output='webOut']").on("input", function(){
    	var inputValue = "https://"+$(this).val();
        var outputID = $(this).data('output');

        $('#' + outputID).attr('href', inputValue);
    });

    $(".url-input[data-output='photoOut']").on("input", function(){
    	var inputValue = $(this).val();
        var outputID = $(this).data('output');

        $('#' + outputID).attr('src', inputValue);
    });

});
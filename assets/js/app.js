// get plugins.
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:5000/get_all_plugins',
        type: 'POST',
        success: function(data) {
            var options_lexical = '';
            var options_syntatic = '';
            var options_semantic = '';

            for (plugin in data['plugins']) {
                options_lexical += '\
                <div class="col-md-4">\
                    <div class="card  card-tasks">\
                        <div class="card-header ">\
                            <h4 class="card-title">' + data['plugins'][plugin]['name'] + '\
                            <button type="button" rel="tooltip" title="Analyze" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" onclick="info()">\
                                <i class="now-ui-icons business_bulb-63" title="More info!"></i>\
                            </button>\
                            </h4>\
                            <h5 class="card-category">Tasks Analysis</h5>\
                        </div>\
                        <div class="card-body">\
                            <div class="table-full-width table-responsive">\
                                <table class="table">\
                                    <tbody>' +
                    for () { <
                        tr > \
                            <
                            /tr>\
                    } +
                    '</tbody>\
                                </table>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
            }
            //console.log(data['plugins'][plugin]);

            $('#content_plugins').html(options_lexical);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            var errorMsg = 'Ajax request failed: ' + xhr.responseText;
            $('#content').html(errorMsg);
        }
    });
});

// get datasets.
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:5000/get_all_datasets',
        type: 'POST',
        success: function(data) {
            var options = '<option disabled="" selected="">- Choose Dataset Existing -</option>';
            for (dataset in data['datasets']) {
                options += '<option value="' + data['datasets'][dataset]['_id'] + '">' + data['datasets'][dataset]['name'] + '|' + data['datasets'][dataset]['data_time'] + '</option>';
            }
            $('#dataset').html(options);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            var errorMsg = 'Ajax request failed: ' + xhr.responseText;
            $('#content_select').html(errorMsg);
        }
    });
});

// processing data.
$("document").ready(function() {
    $("#send").click(function() {
        var data = $("#message").val();
        $.ajax({
            url: "http://localhost:5000/processing",
            type: "POST",
            dataType: "text",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            processData: false
        }).done(function(data) {
            console.log(data);
        });
    });
});
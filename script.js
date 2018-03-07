$(document).ready(function(){
    $("#button").on("click",function(){
        var term= $("#artistName").val();
        var limit=$("#limit").val();
        $.ajax({
            url: "https://itunes.apple.com/search?term="+term+"&limit="+limit,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result);
            },
            error: function() { alert('Failed!'); }
        });
    });
});

// function that creates table with all information, called by first function
function myFunction(json){

    var table = $("#table");
    table.addClass("table");
    table.html("<tr style='font-weight: bold'> <td align='center'>Song</td> <td align='center'>Artist</td> <td align='center'>Album Cover</td> <td align='center'>Album</td> </tr>");
    for (var i=0;i<json.results.length;i++)
        table.append("<tr id='row'>" +
            "<td align='center'>"+json.results[i].trackName+"</td>"+
            "<td align='center'>"+json.results[i].artistName+"</td>"+
            "<td align='center'> <img src="+json.results[i].artworkUrl100+"></td>"+
            "<td align='center'>"+json.results[i].collectionName+"</td>"+
            "</tr>"
        )

}

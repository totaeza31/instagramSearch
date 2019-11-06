$(function () {
    //get instagram.json
    $.get("https://www.instagram.com/explore/tags/phuket/?__a=1", function (data, status) {
        //  console.log("Data: "+ data + "\nStatus: "+ status);
        console.log(status);
        console.log(data);

        $("#location").text(data.graphql.hashtag.name);
        // $("#location2").text(data.graphql.location.slug);
        $("#count").text(data.graphql.hashtag.edge_hashtag_to_media.count);

        var imageUrl = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[1].node.display_url;
        $("#post").attr("src",imageUrl);

        for (node in data.graphql.hashtag.edge_hashtag_to_media.edges) {
            var post = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[node];



            var row = `
          
             <div class="col-4">
                 <img height="350px" width="350px;"  src="${post.node.display_url}" alt="">           
              
                 <div class="row">
                 <div class="col-8">   ${post.node.edge_liked_by.count}</div>
                 <div class="col-4"> <img width="40px"; src="2.png" alt="">${post.node.edge_media_to_comment.count}</div>
          
                 </div>  
                 
                 <div> ${post.node.edge_media_to_caption.edges[0].node.text}</div>
             </div>       
     
             `;


            $("#posts").append(row);

        }



    });



});